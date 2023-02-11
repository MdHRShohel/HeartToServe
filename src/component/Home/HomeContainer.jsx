import AntiDrugCampaign from "./AntiDrugCampaign";
import Banner from "./Banner";
import BecomeAVolunteer from "./BecomeAVolunteer";
import BloodDonation from "./BloodDonation";
import ContactUs from "./ContactUs";
import CoPartners from "./CoPartners";
import FreeCounselling from "./FreeCounselling";
import FundRaising from "./FundRaising";
import SmallCounterBanner from "./SmallCounterBanner";
import Team from "./Team";
import YouthDevelopment from "./YouthDevelopment";

function HomeContainer() {
  return (
    <>
      <Banner />
      <BecomeAVolunteer />
      <AntiDrugCampaign />
      <FreeCounselling />
      <BloodDonation />
      <FundRaising />
      <YouthDevelopment />
      <SmallCounterBanner />
      <Team/>
      <CoPartners/>
      <ContactUs />
    </>
  );
}

export default HomeContainer;
