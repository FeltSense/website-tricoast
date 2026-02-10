import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formId, formData, userAgent } = body;

    // Get environment variables
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
    const projectId = process.env.PROJECT_ID;
    const founderId = process.env.FOUNDER_ID;

    // If Supabase is configured, save to database
    if (supabaseUrl && supabaseServiceKey && projectId) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const { data, error } = await supabase
          .from('form_submissions')
          .insert({
            project_id: projectId,
            founder_id: founderId || null,
            form_id: formId || 'contact',
            form_data: formData as Record<string, unknown>,
            user_agent: userAgent || request.headers.get('user-agent'),
            submitted_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (error) {
          console.error('Supabase insert error:', error);
          // Continue anyway - don't fail the user experience
        } else {
          console.log('Form submission saved to database:', data.id);
        }
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Continue anyway - don't fail the user experience
      }
    } else {
      // Log submission even if database is not configured
      console.log('Form submission received (database not configured):', {
        formId: formId || 'contact',
        formData,
        timestamp: new Date().toISOString()
      });
    }

    // Always return success to the user
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your submission! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Unable to process submission. Please try again.' },
      { status: 500 }
    );
  }
}
