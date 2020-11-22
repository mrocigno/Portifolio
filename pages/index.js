import { Header } from "../src/component/header";
import { ParallaxBody, ParallaxScene, ParallaxLayer } from "./_styles";

function Home() {
    return (
        <>
            <Header/>
            <ParallaxBody>
                <ParallaxScene>
                    <ParallaxLayer test="/images/layer6.webp" translateZ="-400"/>
                    <ParallaxLayer test="/images/layer7.webp" translateZ="-400" repeat={true}/>
                    <ParallaxLayer test="/images/layer5.webp" translateZ="-300" repeat={true}/>
                    <ParallaxLayer test="/images/layer4.webp" translateZ="-200" repeat={true}/>
                    <div className="falling-star"/>
                    <ParallaxLayer test="/images/layer3.webp" translateZ="-150" repeat={true}/>
                    <ParallaxLayer test="/images/layer2.webp" translateZ="-100" repeat={true}/>
                    <ParallaxLayer test="/images/layer1.webp" repeat={true}/>
                </ParallaxScene>
                <div style={{height: "200vh", width: "100px", backgroundColor: "red"}}></div>
            </ParallaxBody>
        </>
    );
}



export default Home;