import { CometCard } from "./ui/comet-card"
import bgImg from '../assets/heroImg.webp'

export function HeroCard() {
    return (
        <CometCard>
            <button
                type="button"
                className="flex w-full "
                style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                }}
            >
                <div className="w-60 lg:w-90">
                    <div className="w-full">
                        <img
                            loading="lazy"
                            className=""
                            src={bgImg}
                        />
                    </div>
                </div>
                
            </button>
        </CometCard>
    );
}
