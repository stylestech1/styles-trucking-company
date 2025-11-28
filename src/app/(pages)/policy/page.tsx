'use client'
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
// Importing Language Provider
import { useTheme } from "@/context/theme/ThemeProvider";

const PrivacyPolicy = () => {
    const { theme } = useTheme();

  return (
    <section className="container mx-auto px-10 py-30">
      <header className="text-center pl-3">
        <Link href={"/"} className="flex gap-5 items-center text-[hsl(var(--primary))]">
          <span>
            <ArrowLeft size={18} />
          </span>
          <span>Back to Home</span>
        </Link>
      </header>

      <div className="mb-20 mt-10">
        {/* Top */}
        <div>
          <div className="flex items-center gap-5">
            <span className="bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] rounded-xl p-4">
              <Shield size={25} />
            </span>
            <p className="text-lg">Privacy Policy</p>
          </div>
          <p className="text-[hsl(var(--text))] my-5">
            Effective Date: November 24, 2025
          </p>
          <p className="text-[hsl(var(--text))] my-5">
            Styles Trucking Driver App {`("we", "our", "us")`} is committed to
            protecting the privacy of our users and their device data. This
            Privacy Policy explains what data we collect, how we use it, and how
            we protect it when you use the app.
          </p>
        </div>

        {/* 1. Data */}
        <div className="space-y-3 my-10">
          <p className="text-xl">1. Data We Collect</p>
          <p className="font-medium">Account Information</p>
          <p className="text-[hsl(var(--text))]">
            When you create an account, we collect your email and login
            credentials.
          </p>
          <p className="font-medium">User Location</p>
          <p className="text-[hsl(var(--text))]">
            Your current location is used only within the app for navigation and
            route purposes. Your location is not shared with other users or
            third parties.
          </p>
          <p className="font-medium">Device Information</p>
          <p className="text-[hsl(var(--text))]">
            Device type, operating system, and other technical details for
            improving app performance.
          </p>
        </div>

        {/* 2. Use Data */}
        <div className="my-10 space-y-3">
          <p className="text-xl">2. How We Use Data</p>
          <ul className="space-y-3 list-disc list-inside [&>li::marker]:text-[hsl(var(--primary))] pl-1">
            <li>To improve your navigation experience within the app.</li>
            <li>To send notifications to users via Firebase Notifications.</li>
            <li>To provide technical support when needed.</li>
            <li>To analyze app usage and improve future features.</li>
          </ul>
        </div>

        {/* 3. Third-Party */}
        <div className="space-y-3 my-10">
          <p className="text-xl">3. Use of Third-Party Services</p>
          <div className={`${theme === 'dark' ? 'bg-[#202a4b]' : 'bg-[#F2F6FB]'} rounded-xl p-5 space-y-3 my-5`}>
            <p className="font-medium">Firebase</p>
            <ul className="space-y-3 list-disc list-inside [&>li::marker]:text-[hsl(var(--primary))] pl-1">
              <li>The app uses Firebase to send notifications.</li>
              <li>
                Data collected via Firebase includes device information only and
                is used solely to enhance the notification experience.
              </li>
              <li>No Firebase data is shared with third parties.</li>
            </ul>
          </div>
          <div className={`${theme === 'dark' ? 'bg-[#202a4b]' : 'bg-[#F2F6FB]'} rounded-xl p-5 space-y-3 my-5`}>
            <p className="font-medium">Google Maps</p>
            <ul className="space-y-3 list-disc list-inside [&>li::marker]:text-[hsl(var(--primary))] pl-1">
              <li>The app uses Google Maps for navigation purposes.</li>
              <li>
                Location data is used only within the app to provide navigation
                services.
              </li>
              <li>
                Location is not shared with other users or third-party services.
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Sharing */}
        <div className="space-y-3 my-10">
          <p className="text-xl">4. Data Sharing</p>
          <p className="text-[hsl(var(--text))]">
            We do not share any personal data with external parties without user
            consent, except when required by law or technical necessity.
          </p>
        </div>

        {/* 5. Protection */}
        <div className="space-y-3 my-10">
          <p className="text-xl">5. Data Protection</p>
          <ul className="space-y-3 list-disc list-inside [&>li::marker]:text-[hsl(var(--primary))] pl-1">
            <li>All data is stored securely and encrypted where applicable.</li>
            <li>
              No other user can access your personal information or location.
            </li>
          </ul>
        </div>

        {/* 6. Rights */}
        <div className="space-y-3 my-10">
          <p className="text-xl">6. User Rights</p>
          <ul className="space-y-3 list-disc list-inside [&>li::marker]:text-[hsl(var(--primary))] pl-1">
            <li>
              Users can update or delete their account information by contacting
              us via email.
            </li>
            <li>
              Users can opt out of certain data collection, though some app
              functionalities may be affected.
            </li>
          </ul>
        </div>

        {/* 7. Contact */}
        <div className="space-y-3 my-10">
          <p className="text-xl">7. Contact Us</p>
          <p className="text-[hsl(var(--text))]">
            If you have any questions about this Privacy Policy or how your data
            is used, you can contact us at:
          </p>

          <div className={`${theme === 'dark' ? 'bg-[#202a4b]' : 'bg-[#F2F6FB]'} rounded-xl p-5 space-y-3 my-5`}>
            <Link
              href={"mailto:support@stylestrucking.com"}
              className="text-[hsl(var(--primary))]"
            >
              support@stylestrucking.com
            </Link>
            <p className="text-[hsl(var(--text))]">Phone: +479-480-3064</p>
          </div>

          <div className={`${theme === 'dark' ? 'bg-[#202a4b]' : 'bg-[#fefce8]'} rounded-xl p-5 space-y-3 my-5`}>
            <p className="font-medium">📱 For Google Play Store Compliance</p>
            <p className="text-[hsl(var(--text))]">
              This privacy policy is publicly accessible and complies with
              Google Play Store requirements. The policy URL should be added to
              the Privacy Policy field in your Google Play Store Listing before
              submitting your app for review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
