-- ============================================
-- Utilidades de Administración - D.A.L.E
-- Scripts útiles para gestionar usuarios y roles
-- ============================================

-- ============================================
-- 1. ASIGNAR ROL DE ADMINISTRADOR
-- ============================================

-- Por email (recomendado)
UPDATE public.users
SET role = 'admin'
WHERE email = 'mateo2000armi@gmail.com';

-- Por ID de usuario
-- UPDATE public.users
-- SET role = 'admin'
-- WHERE id = 'uuid-del-usuario-aqui';

-- ============================================
-- 2. CAMBIAR ROL DE USUARIO
-- ============================================

-- A instructor
-- UPDATE public.users
-- SET role = 'instructor'
-- WHERE email = 'tu-email@ejemplo.com';

-- De vuelta a usuario normal
-- UPDATE public.users
-- SET role = 'user'
-- WHERE email = 'tu-email@ejemplo.com';

-- ============================================
-- 3. CONSULTAS ÚTILES
-- ============================================

-- Ver todos los usuarios con sus roles
-- SELECT 
--   id, 
--   email, 
--   full_name, 
--   role, 
--   created_at,
--   updated_at
-- FROM public.users 
-- ORDER BY created_at DESC;

-- Ver todos los administradores
-- SELECT 
--   id, 
--   email, 
--   full_name, 
--   role, 
--   created_at
-- FROM public.users 
-- WHERE role = 'admin'
-- ORDER BY created_at DESC;

-- Ver usuarios con sus perfiles y data_score
-- SELECT 
--   u.id,
--   u.email,
--   u.full_name,
--   u.role,
--   up.data_score,
--   up.bio,
--   u.created_at
-- FROM public.users u
-- LEFT JOIN public.user_profiles up ON u.id = up.user_id
-- ORDER BY u.created_at DESC;

-- Contar usuarios por rol
-- SELECT 
--   role,
--   COUNT(*) as total
-- FROM public.users
-- GROUP BY role;

-- ============================================
-- 4. ELIMINAR USUARIO (cuidado!)
-- ============================================

-- Eliminar usuario por email (esto también eliminará su perfil por CASCADE)
-- DELETE FROM public.users
-- WHERE email = 'email-a-eliminar@ejemplo.com';

-- ============================================
-- 5. ACTUALIZAR DATA_SCORE MANUALMENTE
-- ============================================

-- Actualizar data_score de un usuario
-- UPDATE public.user_profiles
-- SET data_score = 100
-- WHERE user_id = (
--   SELECT id FROM public.users WHERE email = 'tu-email@ejemplo.com'
-- );

-- ============================================
-- FIN DEL SCRIPT
-- ============================================

