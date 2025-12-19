-- ============================================
-- Script para asignar rol de administrador
-- Ejecuta este script en SQL Editor de Supabase
-- ============================================

-- Opción 1: Asignar admin a un usuario específico por email
UPDATE public.users
SET role = 'admin'
WHERE email = 'mateo2000armi@gmail.com';

-- Opción 2: Asignar admin a un usuario específico por ID
-- (Más seguro si conoces el UUID del usuario)
-- UPDATE public.users
-- SET role = 'admin'
-- WHERE id = 'uuid-del-usuario-aqui';

-- Opción 3: Ver todos los usuarios y sus roles
-- SELECT id, email, full_name, role, created_at 
-- FROM public.users 
-- ORDER BY created_at DESC;

-- ============================================
-- NOTA: Reemplaza 'tu-email@ejemplo.com' con 
-- el email del usuario que quieres hacer admin
-- ============================================

