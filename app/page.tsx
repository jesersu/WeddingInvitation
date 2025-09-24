import InvitationCard from "../components/InvitationCard";
import MusicPlayer from "../components/MusicPlayer";
import FloralBackdropCard from "../components/FloralBackdropCard";
import WeddingCountdown from "../components/WeddingCountdown";
import WeddingDateBanner from "../components/WeddingDateBanner";
import CouplePhoto from "../components/CouplePhoto";
import RosesInfoCard from "../components/RosesInfoCard";
import ItineraryCard from "../components/ItineraryCard";
import ChurchLocationCard from "../components/ChurchLocationCard";
import ReceptionLocationCard from "../components/ReceptionLocationCard";
import CouplePhotoFramed from "../components/CouplePhotoFramed";
import DressCodeGiftSection from "../components/DressCodeGiftSection";
import AccountsInfoBanner from "../components/AccountsInfoBanner";
import GiftAndPlaylistCard from "../components/GiftAndPlaylistCard";
import ConfirmAttendanceCard from "../components/ConfirmAttendanceCard";
import { Reveal } from "../components/Reveal";
import CoverPage from "../components/CoverPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-amber-50 to-white">
      {/* Full-screen cover overlay: hides content until OPEN is pressed */}
      <CoverPage
        title="Aaron & Johanna"
        subtitle="Bienvenidos"
        coupleImageSrc="/couple-2.png"
        backgroundSrc="/cover-page-2.jpg"
        rememberOpen={false}
      />
      <main className="max-w-5xl mx-auto py-12 px-4 space-y-10">
        <Reveal>
          <InvitationCard
          title="¡Nos casamos!"
          couple={{ groom: "Aaron", bride: "Johanna" }}
          subtitle="y"
          topImageSrc="/floral-top-1.png"
          bottomImageSrc="/floral-bottom-1.png"
        />
        </Reveal>

        {/* Wedding-styled music player below the invitation */}
        <Reveal delay={80}>
          <MusicPlayer src="/music/wedding.mp3" title="Nuestra canción" />
        </Reveal>

        {/* Floral backdrop with shadowed message card */}
        <Reveal delay={120}>
          <FloralBackdropCard
          backgroundSrc="/bg-roses-2.png"
          title="Un mensaje para nuestros invitados"
          message="Nos llena de alegría compartir este momento con ustedes. ¡Gracias por ser parte de nuestra historia!"
        />
        </Reveal>

        {/* Countdown section */}
        <Reveal delay={160}>
          <WeddingCountdown
          targetDate="2025-11-08T11:00:00-05:00"
          backgroundSrc="/bg-roses-4.png"
          title="Cuenta regresiva para nuestra boda"
        />
        </Reveal>

        {/* Big date banner */}
        <Reveal delay={200}>
          <WeddingDateBanner
          date="2025-11-08T11:00:00-05:00"
          backgroundSrc="/bg-date.png"
          subtitle="Reserva la fecha"
        />
        </Reveal>

        {/* Couple Photo */}
        <Reveal delay={240}>
          <CouplePhoto
          src="/goku-milk.jpg"
          alt="Pareja"
          caption="Con amor, Edson & Lisseth"
        />
        </Reveal>

        {/* Roses Info Card (parents, padrinos, etc.) */}
        <Reveal delay={280}>
          <RosesInfoCard
          backgroundSrc="/bg-roses-7.png"
          topIconSrc="/bg-ring-1.png"
          cornerTopLeftSrc="/bg-roses-3.png"
          cornerBottomRightSrc="/bg-roses-4.png"
          intro="Con la bendición de nuestros padres"
          sections={[
            { heading: "PADRES DEL NOVIO", items: ["Geny Flores Leiva Cuarite", "Luis Hernán Espeźua Eduardo"] },
            { heading: "PADRES DE LA NOVIA", items: ["Elena Bellido Palma", "Victor Moisés Manrique"] },
            { heading: "PADRINOS DE RELIGIOSO", items: ["Hernán Abad Espeźua Leiva", "Maria Teresa Quico Dueñas"] },
            { heading: "TESTIGOS DE RELIGIOSO", items: ["Roxana Altamirano Bellido", "Jose Antonio Pinto Sanchez"] },
          ]}
        />
        </Reveal>


        {/* Itinerary */}
        <Reveal>
          <ItineraryCard
          backgroundSrc="/bg-roses-8.png"
          title="Itinerario"
          leftItems={[
            { time: "11:00 am", label: "Ceremonia Religiosa", iconSrc: "/icon/CHURCH.png" },
            { time: "1:30 pm", label: "Ceremonia Civil", iconSrc: "/icon/WEDDING_VOWS.png" },
            { time: "3:00 pm", label: "Comida", iconSrc: "/icon/CUTLERY.png" },
          ]}
          rightItems={[
            { time: "1:00 pm", label: "Recepción", iconSrc: "/icon/CAKE.png" },
            { time: "2:00 pm", label: "Fotos / Brindis", iconSrc: "/icon/DRINKING.png" },
            { time: "4:00 pm", label: "Inicio de fiesta", iconSrc: "/icon/MUSIC.png" },
          ]}
        />
        </Reveal>


        {/* Church location card */
        }
        <Reveal>
          <ChurchLocationCard
          title="Ceremonia Religiosa"
          backgroundSrc="/bg-roses-9.png"
          time="11:00 am"
          churchName="Iglesia Santisima Cruz de la Tomilla - Cayma"
          mapUrl="https://maps.app.goo.gl/xvoLw6hTKLDVatez6"
          iconSrc="/icon/CHURCH.png"
        />
        </Reveal>

        {/* Reception location card */}
        <Reveal>
          <ReceptionLocationCard
          title="Recepción"
          backgroundSrc="/bg-roses-7.png"
          time="1:00 pm"
          venueName="Boulevard Paraiso"
          mapUrl="https://maps.app.goo.gl/S96Rn3avCsm1U1rr7"
          iconSrc="/icon/CAKE.png"
        />
        </Reveal>

        {/* Another couple photo with a beautiful frame
        <CouplePhotoFramed
          src="/picture-1.png"
          alt="Otra foto de la pareja"
          caption="Nuestro siguiente capítulo juntos"
        /> */}


        {/* Dress code + gift suggestion section */}
        <Reveal>
          <DressCodeGiftSection
          backgroundSrc="/bg-roses-2.png"
          circleTitle="Código de Vestimenta"
          circleSubtitle="ELEGANTE"
          circleIconSrc="/icon/DRESS-CODE.png"
          sealSrc="/icon/SEAL.png" //SELLO
          giftTitle="Sugerencia de regalo"
          giftIconSrc="/icon/COUPLE-1.png"
          giftMessage="¡Que nos acompañen es lo más importante! Y si está en tu disposición realizar una muestra de cariño estaremos muy agradecidos."
        />
        </Reveal>

        {/* Accounts information banner */}
        <Reveal>
          <AccountsInfoBanner
          title="IRINA"
          backgroundSrc="/bg-papiro.png"
          floralLeftSrc="/flower-1.png"
          floralRightSrc="/flower-2.png"
          lines={[
            { label: "BCP", value: "XXXXXXXXX" },
            { label: "CCI", value: "XXXXXXXXXXXXXXXXXXXX" },
            { label: "YAPE", value: "XXXXXXXXX" },
            { label: "DIRECCIÓN", value: "XXXXXXXXXXXXXXXXXXXX" },
          ]}
        />
        </Reveal>

        {/* Gift suggestion + Playlist card */}
        <Reveal>
          <GiftAndPlaylistCard
          backgroundSrc="/bg-roses-2.png"
          titleGift="Sugerencia de regalo"
          giftIconSrc="/icon/GIFT_2.png"
          giftMessage="¡Que nos acompañen es lo más importante! Y si está en tu disposición realizar una muestra de cariño estaremos muy agradecidos."
          giftCtaText="OPCIONES DE REGALO"
          giftCtaUrl="#regalos"
          titlePlaylist="Playlist del evento"
          playlistMessage="Queremos que nuestra fiesta tenga tu toque especial. Comparte con nosotros la canción que no puede faltar en nuestra boda."
          playlistCtaText="ELEGIR CANCIÓN"
          playlistCtaUrl="#playlist"
        />
        </Reveal>

        {/* Confirm attendance card */}
        <Reveal>
          <ConfirmAttendanceCard
          backgroundSrc="/bg-roses-2.png"
          title="Confirma tu asistencia"
          message="Tu presencia hará que este día sea aún más especial para nosotros. Por favor, confirma tu asistencia y acompáñanos en este momento tan importante."
          deadline="20 de Setiembre"
          buttonText="CONFIRMAR"
          buttonHref="#confirmar"
          illustrationSrc="/icon/BICICLE.png"
        />
        </Reveal>
      </main>
    </div>
  );
}
