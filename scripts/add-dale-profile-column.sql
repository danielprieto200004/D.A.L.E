-- ============================================
-- Agregar columna dale_profile a user_profiles
-- Ejecuta este script en SQL Editor de Supabase
-- ============================================

-- Agregar columna dale_profile
ALTER TABLE public.user_profiles
ADD COLUMN IF NOT EXISTS dale_profile TEXT CHECK (dale_profile IN ('kids', 'citizen', 'literacy', 'strategy'));

-- Actualizar la función handle_new_user para incluir dale_profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    'user'
  );
  
  INSERT INTO public.user_profiles (user_id, data_score, dale_profile)
  VALUES (
    NEW.id, 
    0,
    COALESCE((NEW.raw_user_meta_data->>'dale_profile')::TEXT, NULL)
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- FIN DEL SCRIPT
-- ============================================

