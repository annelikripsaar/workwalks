import React from "react"
import styled from "@emotion/styled"
import { screenSize } from "../styles/screensizes"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fe5000;
  width: 100vw;
  height: 100vh;
  padding-top: 240px;
  display: ${p => (p.visible ? "flex" : "none")};
  flex-direction: column;
  overflow-y: scroll;

  ${screenSize.sm} {
    padding-top: 180px;
    padding-bottom: 56px;
  }
`

const Section = styled.section`
  color: black;
  width: 50vw;
  margin: 0 auto 32px auto;

  ${screenSize.sm} {
    width: 96vw;
  }
`

export default function AboutSection({ visible }) {
  return (
    <Container visible={visible}>
      <Section>
        <p>
          Sel kevadel levinud pandeemia katkestas tavapärase elukorralduse ja
          rutiini. Luues lõputöid ning valmistades ette lõputööde näitust, tuli
          ka EKA graafilise disaini osakonna kolmanda kursuse tudengitel oma
          plaanid ümber mõelda. Näitus „Töö käib” kutsub külastajaid jalutama
          nii linna- kui ka veebiruumis, et saada osa isolatsioonis valminud
          teostest. Lõpetajad soovivad oma töödega vaataja tähelepanu suunata
          seni ehk märkamata jäänud ühiskondlik-elulistele asjaoludele ja
          unistavad olla taas koos.
        </p>
      </Section>
      <Section>
        <p>
          The pandemic spreading this spring disrupted our everyday routine. The
          students of the Department of Graphic Design had to rethink and plan
          their thesis projects and the physical exhibition experience during
          this lockdown. Exhibition “Work Walks” invites visitors to walk the
          urban as well as the web spaces in order to experience the projects
          completed in isolation. The graduating class wishes to guide the
          viewer’s attention to different aspects of our lives that may have
          remained unnoticed so far, and dreams about being together once again.
        </p>
      </Section>
      <Section>
        <p>
          Пандемия, которая распространилась этой весной, нарушила привычный для
          нас образ жизни. При создании диссертации и готовясь к выставочным
          работам, студентам третьего курса графического дизайна Эстонской
          Академии Художеств, пришлось свои планы перестроить. Выставка под
          названием "Работа идет", приглашает гостей прогуляться как по городу,
          так и в веб-пространстве, чтобы окунуться в работу, выполненную в
          изоляции. Выпускники Эстонской Академии Художеств желают своими
          работами привлечь внимание к до сих пор незамеченным
          социально-жизненным обстоятельствам и мечтают о прямом взаимодействии
          со зрителем.
        </p>
      </Section>
      <Section>
        <p>
          Näitusel osalevad/graduating designers/выпускники: Kersti Heile,
          Elisabeth Juusu, Roven Jõekäär, Anneli Kripsaar, Sigrid Liira, Laura
          Merendi, Mikk Oja, Robin Siimann, Patrick Zavadskis, Johann Villmann.
        </p>
        <p>
          Juhendajad/supervisors/руководители: Ott Kagovere, Maria Muuk, Norman
          Orro, Indrek Sirkel, Sean Yendrys.
        </p>
      </Section>
    </Container>
  )
}
