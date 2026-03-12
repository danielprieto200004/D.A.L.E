"use client";

import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Autenticación desactivada (sin Supabase)
    setLoading(false);
  }, []);

  return { user, loading };
}

