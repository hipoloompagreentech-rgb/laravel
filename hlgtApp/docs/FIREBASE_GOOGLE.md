# Habilitar inicio de sesión con Google (Firebase)

Esta guía rápida explica los pasos que debes hacer en la consola de Firebase y cómo probar el inicio de sesión con Google en tu proyecto.

## Pasos en Firebase Console

1. Abre la consola de Firebase: https://console.firebase.google.com/
2. Selecciona tu proyecto (ej. `hipoloompadb`).
3. Ve a Authentication -> Sign-in method.
4. En la lista de proveedores, habilita `Google`.
   - (Opcional) Puedes personalizar el nombre del proveedor y el proyecto OAuth.
5. Verifica la lista de dominios autorizados (Authorized domains). Asegúrate de que tu dominio local y de desarrollo estén ahí (ejemplos comunes):
   - `localhost`
   - `localhost:5173` (o el puerto que use Vite)
   - tu dominio de staging/producción (ej. `hipooloompa.example.com`)
6. Guarda los cambios.

> Nota: Para `signInWithPopup` normalmente no necesitas configurar credenciales OAuth manualmente; habilitar el proveedor y añadir el dominio autorizado es suficiente. Si usas `signInWithRedirect` y necesitas OAuth client IDs personalizados, crea OAuth client IDs en Google Cloud Console y configúralos en Firebase (rara vez necesario para web simple).

## Verificación en el proyecto

1. Asegúrate de haber colocado las variables de entorno `VITE_FIREBASE_*` en tu `.env` (ya están presentes en el repo):
   - VITE_FIREBASE_API_KEY
   - VITE_FIREBASE_AUTH_DOMAIN
   - VITE_FIREBASE_PROJECT_ID
   - VITE_FIREBASE_DATABASE_URL
   - VITE_FIREBASE_STORAGE_BUCKET
   - VITE_FIREBASE_MESSAGING_SENDER_ID
   - VITE_FIREBASE_APP_ID

2. Reinicia el servidor de desarrollo de Vite para que lea los cambios de `.env`:

```bash
# desde la carpeta del proyecto
npm run dev
```

3. En la página de login o registro verás ahora un botón “Sign in with Google” (o "Continuar con Google"). Haz clic para probar. Debería abrir una ventana popup para elegir la cuenta Google.

4. Después de iniciar sesión correctamente, la aplicación guardará/creará un perfil básico en la Realtime Database bajo `users/${uid}` si no existía.

## Seguridad / Recomendaciones

- Revisa las reglas de Realtime Database para asegurarte de que el acceso no autorizado no pueda modificar datos sensibles. Para proyectos en producción, considera:
  - Reglas que restrinjan escritura a `/users/$uid` solo al UID correspondiente.
  - Validaciones de datos en las reglas (por ejemplo, `displayName` tiene longitud mínima, email válido, etc.).

- Si necesitas que Laravel valide la identidad de los usuarios en el backend (ej. protección de endpoints sensibles), implementa verificación del ID token en el servidor (ej: `kreait/laravel-firebase`) y valida `Authorization: Bearer <idToken>` en las peticiones.

Si quieres, puedo:
- Implementar validación del token en Laravel (middleware + ejemplo de ruta protegida).
- Añadir reglas recomendadas para Realtime Database.

¡Dime qué prefieres y lo implemento! 🚀