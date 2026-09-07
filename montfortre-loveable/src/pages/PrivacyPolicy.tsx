import PrivacyPolicyContent from "../components/legal/PrivacyPolicyContent";
import PageShell from "../layouts/PageShell";
import { PRIVACY_POLICY_SEO } from "../seo/pages/privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <PageShell seo={PRIVACY_POLICY_SEO} pageClassName="legal-page privacy-policy-page">
      <PrivacyPolicyContent />
    </PageShell>
  );
}
