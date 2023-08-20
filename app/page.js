import Communique from '@/components/Communique'
import Header from '@/components/Header'
import HeaderTitle from '@/components/HeaderTitle'
import Actualite from '@/components/Actualite'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'


export default function Home() {
  return (
   <div className="">
   <Header/>
   <HeaderTitle/>
   <Hero/>
   <Actualite/>
   <Footer/>
   {/* <Communique/> */}
   </div>
  )
}
