import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  'https://jrpjxlicyljxaajeklld.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycGp4bGljeWxqeGFhamVrbGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5ODkzNjgsImV4cCI6MjAzMjU2NTM2OH0.C9HlQZb3u7N4ZwPDK666M5SXv5xSIkX1BMEcHDcyZT4'
);

export default function App() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');  // Ganti '/logged-out' dengan rute yang sesuai
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Logged in!</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Logout
        </button>
      </div>
    );
  }
}
