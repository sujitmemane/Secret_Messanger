import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";

import { APIResponse } from "@/types/APIResponse";

export async function sendVerificationEmail({
  email,
  username,
  verifyCode,
}: {
  email: string;
  username: string;
  verifyCode: string;
}): Promise<APIResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: email,
      subject: "Secret Messanger | Verify  OTP",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return {
      success: true,
      message: "Verification email send",
    };
  } catch (error) {
    console.log("Error sending email", error);
    return {
      success: false,
      message: "Failed to send verification code",
    };
  }
}
