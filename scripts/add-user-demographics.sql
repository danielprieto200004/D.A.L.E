-- ============================================
-- Agregar campos demográficos y de preferencias
-- Ejecuta este script en SQL Editor de Supabase
-- ============================================

-- Agregar campos a user_profiles
ALTER TABLE public.user_profiles
ADD COLUMN IF NOT EXISTS age INTEGER,
ADD COLUMN IF NOT EXISTS gender TEXT CHECK (gender IN ('male', 'female', 'other', 'prefer_not_to_say')),
ADD COLUMN IF NOT EXISTS country TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS interests TEXT[], -- Array de intereses/gustos
ADD COLUMN IF NOT EXISTS occupation TEXT,
ADD COLUMN IF NOT EXISTS education_level TEXT CHECK (education_level IN ('primary', 'secondary', 'bachelor', 'master', 'phd', 'other')),
ADD COLUMN IF NOT EXISTS company_size TEXT CHECK (company_size IN ('1-10', '11-50', '51-200', '201-500', '501-1000', '1000+', 'not_applicable')),
ADD COLUMN IF NOT EXISTS industry TEXT,
ADD COLUMN IF NOT EXISTS data_experience TEXT CHECK (data_experience IN ('none', 'beginner', 'intermediate', 'advanced', 'expert'));

-- Crear índices para consultas futuras de BI
CREATE INDEX IF NOT EXISTS idx_user_profiles_age ON public.user_profiles(age);
CREATE INDEX IF NOT EXISTS idx_user_profiles_gender ON public.user_profiles(gender);
CREATE INDEX IF NOT EXISTS idx_user_profiles_country ON public.user_profiles(country);
CREATE INDEX IF NOT EXISTS idx_user_profiles_dale_profile ON public.user_profiles(dale_profile);

-- ============================================
-- FIN DEL SCRIPT
-- ============================================

