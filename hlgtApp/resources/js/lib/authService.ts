import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  type User as FirebaseUser,
} from 'firebase/auth';
import { ref, set, get } from 'firebase/database';
import { auth, db } from './firebase';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: string;
}

class AuthService {
  async register(email: string, password: string, displayName: string): Promise<UserProfile> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName });

    const profile: UserProfile = {
      uid: user.uid,
      email: user.email || '',
      displayName: displayName,
      createdAt: new Date().toISOString(),
    };

    await set(ref(db, `users/${user.uid}`), profile);
    return profile;
  }

  async login(email: string, password: string): Promise<UserProfile> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const snap = await get(ref(db, `users/${user.uid}`));
    if (snap.exists()) {
      return snap.val() as UserProfile;
    }
    return {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      createdAt: new Date().toISOString(),
    };
  }

  async logout(): Promise<void> {
    await signOut(auth);
  }

  async updateDisplayName(newDisplayName: string): Promise<UserProfile> {
    const user = auth.currentUser;
    if (!user) throw new Error('No authenticated user');
    await updateProfile(user as FirebaseUser, { displayName: newDisplayName });
    // update DB record as well
    const snap = await get(ref(db, `users/${user.uid}`));
    const profile: UserProfile = snap.exists()
      ? { ...snap.val(), displayName: newDisplayName }
      : {
          uid: user.uid,
          email: user.email || '',
          displayName: newDisplayName,
          createdAt: new Date().toISOString(),
        };
    await set(ref(db, `users/${user.uid}`), profile);
    return profile;
  }

  async updateEmail(newEmail: string): Promise<UserProfile> {
    const user = auth.currentUser;
    if (!user) throw new Error('No authenticated user');
    try {
      await updateEmail(user as FirebaseUser, newEmail);
    } catch (err) {
      console.error('[authService] updateEmail error', err);
      throw err;
    }
    const snap = await get(ref(db, `users/${user.uid}`));
    const profile: UserProfile = snap.exists()
      ? { ...snap.val(), email: newEmail }
      : {
          uid: user.uid,
          email: newEmail,
          displayName: user.displayName || '',
          createdAt: new Date().toISOString(),
        };
    await set(ref(db, `users/${user.uid}`), profile);
    return profile;
  }

  async updatePassword(newPassword: string): Promise<void> {
    const user = auth.currentUser;
    if (!user) throw new Error('No authenticated user');
    try {
      await updatePassword(user as FirebaseUser, newPassword);
    } catch (err) {
      console.error('[authService] updatePassword error', err);
      throw err;
    }
  }

  onAuthChange(callback: (user: UserProfile | null) => void) {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        callback(null);
        return;
      }
      const snap = await get(ref(db, `users/${user.uid}`));
      if (snap.exists()) {
        callback(snap.val() as UserProfile);
        return;
      }
      const fallback: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        createdAt: new Date().toISOString(),
      };
      callback(fallback);
    });
  }
}

const authService = new AuthService();
export default authService;
