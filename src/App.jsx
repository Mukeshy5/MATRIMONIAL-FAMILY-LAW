import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import { practiceAreas } from './data/practiceAreas.js'

const AboutAdvocatePage = lazy(() => import('./Pages/AboutContactPages.jsx').then((module) => ({ default: module.AboutAdvocatePage })))
const ContactPage = lazy(() => import('./Pages/AboutContactPages.jsx').then((module) => ({ default: module.ContactPage })))
const PracticeAreasPage = lazy(() => import('./Pages/PracticePages.jsx').then((module) => ({ default: module.PracticeAreasPage })))
const PracticeAreaPage = lazy(() => import('./Pages/PracticePages.jsx').then((module) => ({ default: module.PracticeAreaPage })))
const LegalServicePage = lazy(() => import('./Pages/LegalServicesPages.jsx').then((module) => ({ default: module.LegalServicePage })))
const LegalResourcesPage = lazy(() => import('./Pages/ResourcePages.jsx').then((module) => ({ default: module.LegalResourcesPage })))
const BlogDetailsPage = lazy(() => import('./Pages/ResourcePages.jsx').then((module) => ({ default: module.BlogDetailsPage })))
const FAQsPage = lazy(() => import('./Pages/ResourcePages.jsx').then((module) => ({ default: module.FAQsPage })))
const PrivacyPolicyPage = lazy(() => import('./Pages/LegalPages.jsx').then((module) => ({ default: module.PrivacyPolicyPage })))
const DisclaimerPage = lazy(() => import('./Pages/LegalPages.jsx').then((module) => ({ default: module.DisclaimerPage })))
const NotFound = lazy(() => import('./Pages/NotFound.jsx'))

function PageLoading() {
  return <div className="page-loading" role="status" aria-live="polite">Loading page…</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about-advocate/" element={<AboutAdvocatePage />} />
            <Route path="practice-areas/" element={<PracticeAreasPage />} />
            {practiceAreas.map((area) => <Route key={area.slug} path={`${area.slug}/`} element={<PracticeAreaPage />} />)}
            <Route path="services/:slug/" element={<LegalServicePage />} />
            <Route path="legal-resources/" element={<LegalResourcesPage />} />
            <Route path="legal-resources/:slug/" element={<BlogDetailsPage />} />
            <Route path="faqs/" element={<FAQsPage />} />
            <Route path="contact/" element={<ContactPage />} />
            <Route path="privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="disclaimer/" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
