import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    Filter
} from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Platform, Dimensions } from "react-native";

const Gallery = () => {
    return(

        <Svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >

            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording1" transform="translate(-97.000000, -793.000000)">
                    <G id="Group" transform="translate(92.000000, 771.000000)">
                        <G id="Group-5" transform="translate(5.000000, 22.000000)">
                            <G id="Group-3">
                                <Rect id="Rectangle" stroke="#FFFFFF" stroke-width="2.5" x="1.25" y="1.25" width="21.5" height="21.5" rx="5"></Rect>
                                <Path d="M2.48754883,15.3996582 C2.72149712,15.7576082 2.93214979,15.9755444 3.11950684,16.0534668 C3.30686389,16.1313892 3.62021838,16.1313892 4.05957031,16.0534668 C6.32503796,13.3511556 8.97184786,12 12,12 C15.0281521,12 18.498367,13.3511556 22.4106445,16.0534668 L22.4106445,21.9191895 L2.48754883,21.9191895 L2.48754883,15.3996582 Z" id="Path-57" fill="#FFFFFF"></Path>
                                <Circle id="Oval" fill="#FFFFFF" cx="7" cy="7" r="2"></Circle>
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}
    

const Flip = () => {
    return(
        <Svg width="32px" height="29px" viewBox="0 0 32 29" version="1.1" xmlns="http://www.w3.org/2000/svg">
{/* 
            <Defs>
                <filter x="-28.6%" y="-32.0%" width="157.1%" height="164.0%" filterUnits="objectBoundingBox" id="filter-1">
                    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.0909090909 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </Defs> */}
            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording1" transform="translate(-288.000000, -794.000000)" fill="#FFFFFF">
                    <G id="Group" transform="translate(92.000000, 771.000000)">
                        <G id="Group-4-Copy" filter="url(#filter-1)" transform="translate(198.000000, 23.000000)">
                            <Path d="M8.50360528,2.23791504 L10.4158963,0.297984716 C10.6038283,0.107336416 10.8603545,-5.97028766e-13 11.1280581,-5.97077943e-13 L16.5299585,-5.9596772e-13 C16.8087262,-5.96018928e-13 17.0748406,0.1163627 17.2641176,0.32102258 L19.0369304,2.23791504 L24,2.23791504 C26.209139,2.23791504 28,4.02877604 28,6.23791504 L28,20.4045817 C28,22.6137207 26.209139,24.4045817 24,24.4045817 L4,24.4045817 C1.790861,24.4045817 2.705415e-16,22.6137207 0,20.4045817 L-8.8817842e-16,6.23791504 C-1.15871992e-15,4.02877604 1.790861,2.23791504 4,2.23791504 L8.50360528,2.23791504 Z M7.719179,12.5522054 C7.87039085,14.4132506 8.40088629,15.9123233 9.33011053,17.0364953 C10.5397138,18.4998688 12.297589,19.3105684 14.544936,19.4751017 C15.0268952,19.510387 15.4462047,19.1482863 15.4814901,18.666327 C15.5167754,18.1843678 15.1546746,17.7650583 14.6727154,17.729773 C12.8765565,17.5982722 11.5649059,16.9933631 10.6789634,15.9215532 C10.0192691,15.1234575 9.6125077,14.0040897 9.47559161,12.5522054 L11.5451385,12.5522054 C11.7108239,12.5522054 11.8451385,12.4178908 11.8451385,12.2522054 C11.8451385,12.1898829 11.8257289,12.1291075 11.789606,12.0783215 L8.74816018,7.80228023 C8.65212674,7.66726454 8.46482441,7.63566317 8.32980871,7.7316966 C8.30250419,7.75111765 8.27864613,7.77497572 8.25922508,7.80228023 L5.21777925,12.0783215 C5.12174582,12.2133372 5.15334718,12.4006395 5.28836288,12.496673 C5.33914895,12.5327959 5.39992434,12.5522054 5.4622468,12.5522054 L7.719179,12.5522054 Z M20.5980191,13.4710052 C20.4468072,11.60996 19.9163118,10.1108872 18.9870876,8.98671523 C17.7774843,7.52334179 16.0196091,6.71264213 13.7722621,6.54810885 C13.2903029,6.51282355 12.8709933,6.8749243 12.835708,7.35688352 C12.8004227,7.83884275 13.1625235,8.25815229 13.6444827,8.2934376 C15.4406416,8.42493839 16.7522922,9.02984746 17.6382347,10.1016574 C18.297929,10.899753 18.7046904,12.0191208 18.8416065,13.4710052 L16.7720596,13.4710052 C16.6063742,13.4710052 16.4720596,13.6053197 16.4720596,13.7710052 C16.4720596,13.8333276 16.4914692,13.894103 16.5275921,13.9448891 L19.5690379,18.2209303 C19.6650713,18.355946 19.8523737,18.3875474 19.9873894,18.291514 C20.0146939,18.2720929 20.038552,18.2482348 20.057973,18.2209303 L23.0994188,13.9448891 C23.1954523,13.8098734 23.1638509,13.622571 23.0288352,13.5265376 C22.9780491,13.4904147 22.9172737,13.4710052 22.8549513,13.4710052 L20.5980191,13.4710052 Z" id="Combined-Shape"></Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

const ScriptIcon = () =>{
    return(
        <Svg width="14px" height="12px" viewBox="0 0 14 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording6" transform="translate(-160.000000, -736.000000)">
                    <G id="Group-7" transform="translate(141.000000, 724.000000)">
                        <G id="Group-2" transform="translate(20.000000, 9.000000)">
                            <G id="Group-4">
                                <G id="Group-6" transform="translate(0.000000, 4.000000)">
                                    <Path d="M0.830993652,4.6875 L11.1455077,4.6875" id="Line" stroke="#F8E71C" stroke-width="2" stroke-linecap="round"></Path>
                                    <Path d="M0.830993652,0.6875 L11.1455077,0.6875" id="Line-Copy-2" stroke="#F8E71C" stroke-width="2" stroke-linecap="round"></Path>
                                    <Circle id="Oval" fill="#F8E71C" cx="1.5" cy="9.5" r="1.5"></Circle>
                                </G>
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}


const Record = () => {
    return(
        <Svg width="75px" height="75px" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording1" transform="translate(-169.000000, -771.000000)" fill="#FF2650">
                    <G id="Group" transform="translate(92.000000, 771.000000)">
                        <G id="Group-3" transform="translate(77.000000, 0.000000)">
                            <Path d="M37.5,75 C16.7893219,75 0,58.2106781 0,37.5 C0,16.7893219 16.7893219,0 37.5,0 C58.2106781,0 75,16.7893219 75,37.5 C75,58.2106781 58.2106781,75 37.5,75 Z M37.5,68.3823529 C54.5558526,68.3823529 68.3823529,54.5558526 68.3823529,37.5 C68.3823529,20.4441474 54.5558526,6.61764706 37.5,6.61764706 C20.4441474,6.61764706 6.61764706,20.4441474 6.61764706,37.5 C6.61764706,54.5558526 20.4441474,68.3823529 37.5,68.3823529 Z" id="Combined-Shape" opacity="0.60109747"></Path>
                            <Circle id="Oval-Copy" cx="37.5" cy="37.5" r="28.6764706"></Circle>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

const StopRecording =() => {
    return(
        <Svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording2" transform="translate(-194.000000, -797.000000)" fill="#FF2650">
                    <G id="Group-3" transform="translate(169.000000, 771.000000)">
                        <Rect id="Rectangle" x="25.3676471" y="26.4705882" width="24.2647059" height="24.2647059" rx="4.4000001"></Rect>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

const RecordingDone = () => {
    return(
        <Svg width="75px" height="75px" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording3" transform="translate(-170.000000, -728.000000)">
                    <G id="Group-3" transform="translate(170.000000, 728.000000)">
                        <Circle id="Oval" fill="#3280DC" cx="37.5" cy="37.5" r="37.5"></Circle>
                        <G id="Group-7" transform="translate(23.307190, 31.040373)" fill="#FFFFFF" fill-rule="nonzero">
                            <Path d="M1.49757826,9.15658464 C0.640142535,8.1897334 0.728841337,6.71085661 1.69569258,5.85342089 C2.66254382,4.99598516 4.14142061,5.08468396 4.99885633,6.05153521 L10.6978254,12.4777374 C11.5552611,13.4445887 11.4665623,14.9234654 10.4997111,15.7809012 C9.53285986,16.6383369 8.05398307,16.5496381 7.19654735,15.5827868 L1.49757826,9.15658464 Z" id="Line" transform="translate(6.097702, 10.817161) rotate(1.000000) translate(-6.097702, -10.817161) "></Path>
                            <Path d="M10.4706647,15.83693 C9.47790483,16.6642299 8.00245483,16.5300981 7.17515492,15.5373382 C6.34785501,14.5445783 6.48198683,13.0691283 7.47474672,12.2418284 L21.5140673,0.54239463 C22.5068272,-0.284905281 23.9822771,-0.150773463 24.8095771,0.84198643 C25.636877,1.83474632 25.5027452,3.31019632 24.5099853,4.13749623 L10.4706647,15.83693 Z" id="Line-2"></Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

const VideoIcon = () => {
    return(
        <Svg width="25px" height="17px" viewBox="0 0 25 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.300000012">
                <G id="Recording7" transform="translate(-133.000000, -381.000000)" fill="#FFFFFF">
                    <G id="Group-16-Copy-3" transform="translate(102.000000, 366.000000)">
                        <G id="Group-12">
                            <G id="Group-6" transform="translate(31.500000, 15.000000)">
                                <G id="Group-5">
                                    <Polygon id="Path" opacity="0.430454799" points="16.0682091 6.00724949 24 2.81272773 24 13.9982794 16.0682091 10.6165612"></Polygon>
                                    <Path d="M2,0 L14.557085,0 C15.6616545,-2.02906125e-16 16.557085,0.8954305 16.557085,2 L16.557085,14.7902834 C16.557085,15.8948529 15.6616545,16.7902834 14.557085,16.7902834 L2,16.7902834 C0.8954305,16.7902834 1.3527075e-16,15.8948529 0,14.7902834 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z" id="Rectangle"></Path>
                                </G>
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

const Reshoot = () => {
    return (
        <Svg width="21px" height="24px" viewBox="0 0 21 24" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording3" transform="translate(-106.000000, -746.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <G id="Group-4" transform="translate(97.000000, 746.000000)">
                        <G id="refresh-(2)" transform="translate(9.000000, 0.000000)">
                            <Path d="M10.4038715,3.5571889 L10.4038715,0.446723758 C10.4054971,0.2668122 10.3011023,0.103616014 10.1394554,0.0334739394 C9.97511608,-0.0358870432 9.78608779,0.00462560277 9.66259201,0.135692865 L4.8941107,5.0236113 C4.72601217,5.19690961 4.72601217,5.47685303 4.8941107,5.65015135 L9.66259201,10.5380698 C9.74458386,10.6228443 9.85644634,10.6701785 9.97288086,10.6695016 C10.2123032,10.6680956 10.4052431,10.4679798 10.4038715,10.2225606 L10.4038715,7.11209548 C13.8136452,7.34564203 16.4651722,10.2447957 16.4727923,13.7477336 C16.4807679,17.4288647 13.576001,20.4196665 9.98481896,20.427842 C6.39363696,20.4360174 3.47591589,17.4584941 3.46794022,13.7773631 C3.46794022,13.5319439 3.27388269,13.3330258 3.0344604,13.3330258 L0.433479828,13.3330258 C0.194057535,13.3330258 0,13.5319439 0,13.7773631 C0,19.4217953 4.4639329,23.9975372 9.97044245,23.9975372 C15.476952,24.1202207 20.0379137,19.6439899 20.1575994,13.9995577 C20.2772343,8.35507345 15.910381,3.67992452 10.4038715,3.5571889 Z" id="Path"></Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

const Play =() => {
    return (
        <Svg width="76px" height="86px" viewBox="0 0 76 86" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Recording3" transform="translate(-177.000000, -450.000000)" fill="#FFFFFF">
                    <Path d="M177,460.626313 L177,525.741306 C177,531.264153 181.477153,535.741306 187,535.741306 C188.78966,535.741306 190.546527,535.261024 192.087293,534.350571 L247.184594,501.793075 C251.93936,498.98344 253.516201,492.851282 250.706567,488.096516 C249.848418,486.644265 248.636846,485.432693 247.184594,484.574544 L192.087293,452.017048 C187.332527,449.207414 181.200369,450.784254 178.390735,455.53902 C177.480282,457.079786 177,458.836653 177,460.626313 Z" id="Path-2-Copy"></Path>
                </G>
            </G>
        </Svg>
    )
}
export {Gallery, Flip, ScriptIcon, Record, StopRecording, RecordingDone, VideoIcon, Reshoot, Play}