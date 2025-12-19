export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: 'admin' | 'user' | 'instructor';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: 'admin' | 'user' | 'instructor';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          role?: 'admin' | 'user' | 'instructor';
          created_at?: string;
          updated_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          user_id: string;
          avatar_url: string | null;
          bio: string | null;
          data_score: number;
          dale_profile: 'kids' | 'citizen' | 'literacy' | 'strategy' | null;
          age: number | null;
          gender: 'male' | 'female' | 'other' | 'prefer_not_to_say' | null;
          country: string | null;
          city: string | null;
          interests: string[] | null;
          occupation: string | null;
          education_level: 'primary' | 'secondary' | 'bachelor' | 'master' | 'phd' | 'other' | null;
          company_size: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+' | 'not_applicable' | null;
          industry: string | null;
          data_experience: 'none' | 'beginner' | 'intermediate' | 'advanced' | 'expert' | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          avatar_url?: string | null;
          bio?: string | null;
          data_score?: number;
          dale_profile?: 'kids' | 'citizen' | 'literacy' | 'strategy' | null;
          age?: number | null;
          gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say' | null;
          country?: string | null;
          city?: string | null;
          interests?: string[] | null;
          occupation?: string | null;
          education_level?: 'primary' | 'secondary' | 'bachelor' | 'master' | 'phd' | 'other' | null;
          company_size?: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+' | 'not_applicable' | null;
          industry?: string | null;
          data_experience?: 'none' | 'beginner' | 'intermediate' | 'advanced' | 'expert' | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          avatar_url?: string | null;
          bio?: string | null;
          data_score?: number;
          dale_profile?: 'kids' | 'citizen' | 'literacy' | 'strategy' | null;
          age?: number | null;
          gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say' | null;
          country?: string | null;
          city?: string | null;
          interests?: string[] | null;
          occupation?: string | null;
          education_level?: 'primary' | 'secondary' | 'bachelor' | 'master' | 'phd' | 'other' | null;
          company_size?: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+' | 'not_applicable' | null;
          industry?: string | null;
          data_experience?: 'none' | 'beginner' | 'intermediate' | 'advanced' | 'expert' | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

