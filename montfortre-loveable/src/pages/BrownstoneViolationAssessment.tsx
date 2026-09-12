import BrownstoneViolationAssessmentContent from "../components/brownstone-violation-assessment/BrownstoneViolationAssessmentContent";
import PageShell from "../layouts/PageShell";
import { BROWNSTONE_VIOLATION_ASSESSMENT_SEO } from "../seo/pages/brownstoneViolationAssessment";

export default function BrownstoneViolationAssessment() {
  return (
    <PageShell seo={BROWNSTONE_VIOLATION_ASSESSMENT_SEO} pageClassName="nyc-buyer-access-page bs-grade-page">
      <BrownstoneViolationAssessmentContent />
    </PageShell>
  );
}
