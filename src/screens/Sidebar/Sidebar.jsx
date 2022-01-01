import Lottie from 'react-lottie';
import cloudy from '../../assets/img/cloudy.json';
export default function Sidebar(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cloudy,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    /**
     * render template
     */
    return (
        <div id="sidebar" class="active">
            <div class="sidebar-wrapper active">
                <div className="box-position">
                    <h3>Hanoi</h3>
                </div>
                <div className="box-animation">
                    <Lottie
                        options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
                <div className="box-temperature text-center">
                    <h1>17<sup>ºC</sup></h1>
                </div>
                <div className="box-time text-center">
                    <h6>12:09 am - 01/01/2022</h6>
                </div>
                <div className="box-description text-center">
                    <h6></h6>
                </div>
            </div>
        </div>
    )
}