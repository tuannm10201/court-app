import { Col, Container, Row } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import OnboardingStep from '../components/Onboarding/OnboardingStep';
import { NavLink } from 'react-router';
import SetupAccountForm from '../components/Onboarding/SetupAccountForm';
import { lazy } from 'react';
import { useSelector } from '../hooks/useStore';
import OnboardingSuccess from '../components/Onboarding/OnboardingSuccess';

const SportsSelect = lazy(() => import('../components/Onboarding/SportsSelect'));
const SkillLevelInput = lazy(() => import('../components/Onboarding/SkillLevelInput'));

type Props = {};

const MAP_CONTENT = {
  TITLE: [
    'Set up your account',
    'Which sport do you play the most?',
    'What’s your current skill level?',
  ],
  SUB_TITLE: [
    'Create your account and start booking courts instantly',
    'Select at least one sport to personalize your experience',
    'Select at least one sport to personalize your experience',
  ],
  COMPONENT: [SetupAccountForm, SportsSelect, SkillLevelInput],
};

export default function Onboarding({}: Props) {
  const { step, isCreatedSuccess } = useSelector((state) => state.onboarding);

  const Component = MAP_CONTENT.COMPONENT[step - 1];

  return (
    <>
      <Container className="onboarding-container h-100 pt-4">
        <Row className="h-100">
          <Col lg={6} className="onboarding-setup-col d-flex flex-column">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>

            <OnboardingStep className="mt-4" />

            {isCreatedSuccess ? (
              <OnboardingSuccess />
            ) : (
              <>
                <h2 className="fw-semibold mt-4">{MAP_CONTENT.TITLE[step - 1]}</h2>
                <p className="color-dark-gray mb-4">{MAP_CONTENT.SUB_TITLE[step - 1]}</p>
                <Component />
              </>
            )}
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <img
              width="100%"
              src="https://s3-alpha-sig.figma.com/img/634b/d315/4c266ebb5704afa4dd4a9c9dd1dda2f4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HxqEf5f2ytlq4wdcOm9FLB3UX55LoI7mGR-OHwk2i1rwHQPrnz1UFmUfVD77kot7X9PJo3JJCpxCy9QXhxBG3cHYFJu9i2xYzDuPTMUKj~KX0ujctrWpfPzo8SdPtb8PBrJvrIDDv7rf9cUE1YNdkGVY3MBQtPZBF-NEV48jmAhbsP3tKqWnUihKJsKsvKnZAVCmVPriE5OgUIwpbkTbzAhKciGa0JsQdbLGIsC6R9hOq1AYmap8Tp-XDIRoKwhYkbbAbfLuY1vSRDvm3kRNVpe5Jo~apKvAZO6Br6V-4p~kqH0-8PrkLoK2tw4l45xy4KVIsrv3fHNU8Qn0UfJqZA__"
              alt="right content"
              className="onboarding-img object-fit-cover rounded-24"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
