import AntiDrugCampaign from "@/component/AntiDrugCampaign";
import BecomeAVolunteer from "@/component/BecomeAVolunteer";
import BloodDonation from "@/component/BloodDonation";
import FreeCounselling from "@/component/FreeCounselling";
import FundRaising from "@/component/FundRaising";
import { Poppins } from "@next/font/google";
import Head from "next/head";


const poppins = Poppins({ weight: ["700", "400"], preload: false });


export default function Home() {
  return (
    <>
      <Head>
        <title>HEART TO SERVE</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${poppins.className}`}>
        <BecomeAVolunteer></BecomeAVolunteer>
        <AntiDrugCampaign></AntiDrugCampaign>
        <FreeCounselling />
        <BloodDonation/>
        <FundRaising></FundRaising>
        <ContactUs></ContactUs>
      </main>
    </>
  );
}
