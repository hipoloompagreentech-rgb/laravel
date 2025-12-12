import { PropsWithChildren } from 'react';

type AuthLayoutProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
}>;

export default function AuthLayout({ children, title = '', subtitle = '' }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-lg p-8 shadow-lg">
        {title && (
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
