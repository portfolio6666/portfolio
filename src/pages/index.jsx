import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Salve Jorge</Name>
        <Function>BLALALALALA</Function>
        <Intro> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Atque accusamus non tempora iusto numquam a quaerat? Nesciunt, corrupti optio impedit amet sint dolore atque laboriosam esse a blanditiis qui numquam.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/CARtman.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}


