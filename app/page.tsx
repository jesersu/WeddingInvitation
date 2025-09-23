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

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-amber-50 to-white">
      <main className="max-w-5xl mx-auto py-12 px-4 space-y-10">
        <InvitationCard
          title="¡Nos casamos!"
          couple={{ groom: "Primo", bride: "Prima" }}
          subtitle="y"
          topImageSrc="/floral-top-1.png"
          bottomImageSrc="/floral-bottom-1.png"
        />

        {/* Wedding-styled music player below the invitation */}
        <MusicPlayer src="/music/wedding.mp3" title="Nuestra canción" />

        {/* Floral backdrop with shadowed message card */}
        <FloralBackdropCard
          backgroundSrc="/bg-roses-2.png"
          title="Un mensaje para nuestros invitados"
          message="Nos llena de alegría compartir este momento con ustedes. ¡Gracias por ser parte de nuestra historia!"
        />

        {/* Countdown section */}
        <WeddingCountdown
          targetDate="2026-06-20T16:00:00-05:00"
          backgroundSrc="/bg-roses-2.png"
          title="Cuenta regresiva para nuestra boda"
        />

        {/* Big date banner */}
        <WeddingDateBanner
          date="2026-06-20T16:00:00-05:00"
          backgroundSrc="/bg-date.png"
          subtitle="Reserva la fecha"
        />

        {/* Couple Photo */}
        <CouplePhoto
          src="/picture-1.png"
          alt="Pareja"
          caption="Con amor, Edson & Lisseth"
        />

        {/* Roses Info Card (parents, padrinos, etc.) */}
        <RosesInfoCard
          backgroundSrc="/bg-roses-5.png"
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


        {/* Itinerary */}
        <ItineraryCard
          backgroundSrc="/bg-roses-2.png"
          title="Itinerario"
          leftItems={[
            { time: "5:00 pm", label: "Ceremonia Religiosa", iconSrc: "/icon/CHURCH.png" },
            { time: "7:00 pm", label: "Ceremonia Civil", iconSrc: "/icon/WEDDING_VOWS.png" },
            { time: "9:00 pm", label: "Cena", iconSrc: "/icon/CUTLERY.png" },
          ]}
          rightItems={[
            { time: "6:40 pm", label: "Recepción", iconSrc: "/icon/CAKE.png" },
            { time: "7:00 pm", label: "Fotos / Brindis", iconSrc: "/icon/DRINKING.png" },
            { time: "10:00 pm", label: "Inicio de fiesta", iconSrc: "/icon/MUSIC.png" },
          ]}
        />


        {/* Church location card */
        }
        <ChurchLocationCard
          title="Ceremonia Religiosa"
          backgroundSrc="/bg-roses-2.png"
          time="5:00 pm"
          churchName="Iglesia San Pedro"
          mapUrl="https://www.google.com/maps?q=Iglesia+San+Pedro"
          iconSrc="/icon/CHURCH.png"
        />

        {/* Reception location card */}
        <ReceptionLocationCard
          title="Recepción"
          backgroundSrc="/bg-roses-2.png"
          time="6:40 pm"
          venueName="Salón Principal"
          mapUrl="https://www.google.com/maps?q=Salon+Principal+Recepcion"
          iconSrc="/icon/CAKE.png"
        />

        {/* Another couple photo with a beautiful frame */}
        <CouplePhotoFramed
          src="/picture-1.png"
          alt="Otra foto de la pareja"
          caption="Nuestro siguiente capítulo juntos"
        />


        {/* Dress code + gift suggestion section */}
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

        {/* Accounts information banner */}
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

        {/* Gift suggestion + Playlist card */}
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

        {/* Confirm attendance card */}
        <ConfirmAttendanceCard
          backgroundSrc="/bg-roses-2.png"
          title="Confirma tu asistencia"
          message="Tu presencia hará que este día sea aún más especial para nosotros. Por favor, confirma tu asistencia y acompáñanos en este momento tan importante."
          deadline="20 de Setiembre"
          buttonText="CONFIRMAR"
          buttonHref="#confirmar"
          illustrationSrc="/icon/BICICLE.png"
        />
      </main>
    </div>
  );
}
