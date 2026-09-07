export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      ghl_settings: {
        Row: {
          connected_at: string | null
          enabled: boolean
          id: number
          last_error: string
          location_id: string
          source_label: string
          updated_at: string
        }
        Insert: {
          connected_at?: string | null
          enabled?: boolean
          id?: number
          last_error?: string
          location_id?: string
          source_label?: string
          updated_at?: string
        }
        Update: {
          connected_at?: string | null
          enabled?: boolean
          id?: number
          last_error?: string
          location_id?: string
          source_label?: string
          updated_at?: string
        }
        Relationships: []
      }
      ghl_sync_log: {
        Row: {
          contact_id: string
          created_at: string
          error: string
          id: string
          lead_id: string
          request_id: number | null
          settled_at: string | null
          status: string
        }
        Insert: {
          contact_id?: string
          created_at?: string
          error?: string
          id?: string
          lead_id: string
          request_id?: number | null
          settled_at?: string | null
          status?: string
        }
        Update: {
          contact_id?: string
          created_at?: string
          error?: string
          id?: string
          lead_id?: string
          request_id?: number | null
          settled_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "ghl_sync_log_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      google_review_stats: {
        Row: {
          id: number
          last_error: string
          maps_uri: string
          pending_request_id: number | null
          place_id: string
          rating: number
          synced_at: string | null
          total_reviews: number
        }
        Insert: {
          id?: number
          last_error?: string
          maps_uri?: string
          pending_request_id?: number | null
          place_id?: string
          rating?: number
          synced_at?: string | null
          total_reviews?: number
        }
        Update: {
          id?: number
          last_error?: string
          maps_uri?: string
          pending_request_id?: number | null
          place_id?: string
          rating?: number
          synced_at?: string | null
          total_reviews?: number
        }
        Relationships: []
      }
      google_reviews: {
        Row: {
          author_name: string
          author_url: string
          created_at: string
          hidden: boolean
          id: string
          photo_url: string
          published_at: string | null
          quote: string
          rating: number
          review_key: string
          sort_order: number
          synced_at: string
          updated_at: string
        }
        Insert: {
          author_name?: string
          author_url?: string
          created_at?: string
          hidden?: boolean
          id?: string
          photo_url?: string
          published_at?: string | null
          quote?: string
          rating?: number
          review_key: string
          sort_order?: number
          synced_at?: string
          updated_at?: string
        }
        Update: {
          author_name?: string
          author_url?: string
          created_at?: string
          hidden?: boolean
          id?: string
          photo_url?: string
          published_at?: string | null
          quote?: string
          rating?: number
          review_key?: string
          sort_order?: number
          synced_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      lead_notification_deliveries: {
        Row: {
          created_at: string
          delivered_at: string | null
          error: string
          failed_at: string | null
          id: string
          lead_id: string
          notification_id: string
          provider_message_id: string
          queued_at: string | null
          recipient_email: string
          sender_email: string
          sending_at: string | null
          status: string
        }
        Insert: {
          created_at?: string
          delivered_at?: string | null
          error?: string
          failed_at?: string | null
          id?: string
          lead_id: string
          notification_id: string
          provider_message_id?: string
          queued_at?: string | null
          recipient_email: string
          sender_email?: string
          sending_at?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          delivered_at?: string | null
          error?: string
          failed_at?: string | null
          id?: string
          lead_id?: string
          notification_id?: string
          provider_message_id?: string
          queued_at?: string | null
          recipient_email?: string
          sender_email?: string
          sending_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_notification_deliveries_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_notification_deliveries_notification_id_fkey"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "lead_notifications"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_notifications: {
        Row: {
          created_at: string
          error: string
          id: string
          lead_id: string
          queued_at: string | null
          recipient_count: number
          request_id: number | null
          sender_email: string
          settled_at: string | null
          started_at: string | null
          status: string
        }
        Insert: {
          created_at?: string
          error?: string
          id?: string
          lead_id: string
          queued_at?: string | null
          recipient_count?: number
          request_id?: number | null
          sender_email?: string
          settled_at?: string | null
          started_at?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          error?: string
          id?: string
          lead_id?: string
          queued_at?: string | null
          recipient_count?: number
          request_id?: number | null
          sender_email?: string
          settled_at?: string | null
          started_at?: string | null
          status?: string
        }
        Relationships: []
      }
      lead_notify_recipients: {
        Row: {
          created_at: string
          email: string
          id: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          sort_order?: number
        }
        Relationships: []
      }
      lead_notify_settings: {
        Row: {
          client_id: string
          connected_at: string | null
          connected_email: string
          enabled: boolean
          id: number
          last_error: string
          notify_to: string
          sender_email: string
          updated_at: string
        }
        Insert: {
          client_id?: string
          connected_at?: string | null
          connected_email?: string
          enabled?: boolean
          id?: number
          last_error?: string
          notify_to?: string
          sender_email?: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          connected_at?: string | null
          connected_email?: string
          enabled?: boolean
          id?: number
          last_error?: string
          notify_to?: string
          sender_email?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          email: string
          first_name: string
          form_type: string
          id: string
          last_name: string
          listing_slug: string
          message: string
          meta: Json
          phone: string
          source_page: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name?: string
          form_type?: string
          id?: string
          last_name?: string
          listing_slug?: string
          message?: string
          meta?: Json
          phone?: string
          source_page?: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          form_type?: string
          id?: string
          last_name?: string
          listing_slug?: string
          message?: string
          meta?: Json
          phone?: string
          source_page?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      media: {
        Row: {
          alt_text: string | null
          created_at: string
          file_path: string
          id: string
          mime_type: string | null
          size_bytes: number | null
          updated_at: string
          uploader_id: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          file_path: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          updated_at?: string
          uploader_id: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          file_path?: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          updated_at?: string
          uploader_id?: string
        }
        Relationships: []
      }
      meta_pixel_settings: {
        Row: {
          capi_enabled: boolean
          enabled: boolean
          id: number
          pixel_id: string
          production_only: boolean
          test_event_code: string
          track_leads: boolean
          track_listing_views: boolean
          track_page_views: boolean
          updated_at: string
        }
        Insert: {
          capi_enabled?: boolean
          enabled?: boolean
          id?: number
          pixel_id?: string
          production_only?: boolean
          test_event_code?: string
          track_leads?: boolean
          track_listing_views?: boolean
          track_page_views?: boolean
          updated_at?: string
        }
        Update: {
          capi_enabled?: boolean
          enabled?: boolean
          id?: number
          pixel_id?: string
          production_only?: boolean
          test_event_code?: string
          track_leads?: boolean
          track_listing_views?: boolean
          track_page_views?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      pages: {
        Row: {
          author_id: string
          body: string | null
          created_at: string
          id: string
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          body?: string | null
          created_at?: string
          id?: string
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          body?: string | null
          created_at?: string
          id?: string
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          author_id: string
          body: string | null
          category_id: string | null
          cover_image_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          published_at: string | null
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          body?: string | null
          category_id?: string | null
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          body?: string | null
          category_id?: string | null
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          email: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      turnstile_settings: {
        Row: {
          enabled: boolean
          id: number
          production_only: boolean
          site_key: string
          updated_at: string
        }
        Insert: {
          enabled?: boolean
          id?: number
          production_only?: boolean
          site_key?: string
          updated_at?: string
        }
        Update: {
          enabled?: boolean
          id?: number
          production_only?: boolean
          site_key?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ghl_config: { Args: never; Returns: Json }
      ghl_disconnect: { Args: never; Returns: Json }
      ghl_put_secret: {
        Args: { p_name: string; p_value: string }
        Returns: undefined
      }
      ghl_record_contact: {
        Args: { p_contact_id: string; p_lead_id: string }
        Returns: undefined
      }
      ghl_save_config: {
        Args: {
          p_enabled?: boolean
          p_inbound_secret?: string
          p_location_id: string
          p_source_label?: string
          p_sync_url?: string
          p_token: string
        }
        Returns: Json
      }
      ghl_set_error: { Args: { p_error: string }; Returns: undefined }
      ghl_status: { Args: never; Returns: Json }
      ghl_sync_reconcile: { Args: never; Returns: number }
      google_reviews_ingest: { Args: never; Returns: string }
      google_reviews_request: { Args: never; Returns: number }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
      lead_notifications_reconcile: { Args: never; Returns: number }
      lead_notify_config: { Args: never; Returns: Json }
      lead_notify_disconnect: { Args: never; Returns: Json }
      lead_notify_finalize: {
        Args: {
          p_deliveries: Json
          p_notification_id: string
          p_sender_email: string
        }
        Returns: undefined
      }
      lead_notify_mark_sending: {
        Args: {
          p_notification_id: string
          p_recipients: string[]
          p_sender_email: string
        }
        Returns: undefined
      }
      lead_notify_normalize_emails: {
        Args: { p_emails: string[] }
        Returns: string[]
      }
      lead_notify_poll_test: { Args: { p_request_id: number }; Returns: Json }
      lead_notify_put_secret: {
        Args: { p_name: string; p_value: string }
        Returns: undefined
      }
      lead_notify_recipient_list: { Args: never; Returns: string[] }
      lead_notify_save_config: {
        Args: {
          p_client_id: string
          p_client_secret: string
          p_enabled?: boolean
          p_notify_recipients?: string[]
          p_notify_to: string
          p_notify_url?: string
          p_sender_email: string
          p_webhook_secret?: string
        }
        Returns: Json
      }
      lead_notify_send_test: { Args: { p_to: string }; Returns: Json }
      lead_notify_set_error: { Args: { p_error: string }; Returns: undefined }
      lead_notify_status: { Args: never; Returns: Json }
      lead_notify_store_token: {
        Args: { p_connected_email: string; p_refresh_token: string }
        Returns: undefined
      }
      lead_notify_webhook_secret: { Args: never; Returns: string }
      leads_sanitize_meta: { Args: { p_meta: Json }; Returns: Json }
      meta_pixel_public_config: { Args: never; Returns: Json }
      meta_pixel_save_config: {
        Args: {
          p_capi_access_token?: string
          p_capi_enabled?: boolean
          p_enabled?: boolean
          p_pixel_id: string
          p_production_only?: boolean
          p_test_event_code?: string
          p_track_leads?: boolean
          p_track_listing_views?: boolean
          p_track_page_views?: boolean
        }
        Returns: Json
      }
      meta_pixel_status: { Args: never; Returns: Json }
      set_google_places_key: { Args: { _key: string }; Returns: string }
      submit_public_lead: { Args: { p_payload: Json }; Returns: string }
      tracking_public_config: { Args: never; Returns: Json }
      tracking_server_config: { Args: never; Returns: Json }
      turnstile_public_config: { Args: never; Returns: Json }
      turnstile_save_config: {
        Args: {
          p_enabled?: boolean
          p_production_only?: boolean
          p_secret_key: string
          p_site_key: string
        }
        Returns: Json
      }
      turnstile_status: { Args: never; Returns: Json }
    }
    Enums: {
      app_role: "admin" | "editor" | "viewer"
      content_status: "draft" | "published"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "viewer"],
      content_status: ["draft", "published"],
    },
  },
} as const
