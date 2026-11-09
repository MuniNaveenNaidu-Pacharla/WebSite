import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, emailId, subject, messages } = body;

    // Validate required fields
    if (!name || !emailId || !subject || !messages) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    if (!supabase) {
      console.warn("Supabase credentials missing in environment variables.");
      return NextResponse.json(
        {
          error:
            "Supabase database connection is not configured yet. Please provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        },
        { status: 500 }
      );
    }

    // Insert response into the inquiries table
    const { data, error } = await supabase
      .from("inquiries")
      .insert([
        {
          name: name.trim(),
          phone: (mobile || "").trim(),
          email: emailId.trim().toLowerCase(),
          subject: subject.trim(),
          message: messages.trim(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save inquiry to database." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry saved successfully.",
      data: data?.[0] || null,
    });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
