import AntiDrugCampaign from "./AntiDrugCampaign";
import Banner from "./Banner";
import BecomeAVolunteer from "./BecomeAVolunteer";
// import BloodDonation from "./BloodDonation";
import ContactUs from "./ContactUs";
import DoNotNeedTrash from "./DoNotNeedTrash";
import FindDonor from "./FindDonor";
import FreeCounselling from "./FreeCounselling";
import FundRaising from "./FundRaising";
import OurCorporatePartners from "./OurCorporatePartners";
import SmallCounterBanner from "./SmallCounterBanner";
import Team from "./Team";
import UrgentHelp from "./UrgentHelp";
import YouthDevelopment from "./YouthDevelopment";


function HomeContainer() {
	return (
		<>
			<Banner />
			<YouthDevelopment />
			<SmallCounterBanner />
			<AntiDrugCampaign />
			<FundRaising />
			<FreeCounselling />
			<FindDonor />
			{/* <BloodDonation /> */}
			<BecomeAVolunteer />
			<DoNotNeedTrash />
			<Team />
			<UrgentHelp />
			<OurCorporatePartners />
			<ContactUs />
		</>
	);
}

export default HomeContainer;
