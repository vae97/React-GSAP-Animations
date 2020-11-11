import React ,{useEffect,useRef} from 'react';
import {Grid,Typography,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {TweenMax, Power3, TimelineMax,Linear} from 'gsap';


const useStyles= makeStyles((themes)=>({
    grid:{
        textAlign:'center',
        backgroundColor:'#330033',
    },
    image:{
        paddingTop:'50px',
        margin:'auto'
    },
    text:{
        margin:'auto',
        padding:'50px',
        fontSize:'30px',
        color:'white'
    },
    button:{
        marginBottom:'30px',
        margin:'auto'
    }

}))

export default function Animation2(){

    const classes =useStyles();

    let girl =useRef(null);
    let text =useRef(null);

    useEffect(()=>{

        var tlHand = new TimelineMax({yoyo:true,  repeat:-1});
            tlHand.fromTo("#Hand",{rotation:'-=5', repeat:-1,transformOrigin:'0% 100%', duration:1},{rotation:'+=7'})
       
        var tlFace = new TimelineMax({yoyo:true,  repeat:-1});
            tlFace.fromTo("#Face",{rotation:'+=2', repeat:-1,transformOrigin:'0% 100%', duration:1,ease:Linear.easeNone},{rotation:'-=2'})

        var tlHair = new TimelineMax({yoyo:true,  repeat:-1});
            tlHair.fromTo("#Hair",{rotation:'+=2', repeat:-1,transformOrigin:'0% 100%', duration:1,ease:Linear.easeNone},{rotation:'-=2'})

        var tlTail = new TimelineMax({yoyo:true,  repeat:-1});
            tlTail.fromTo("#Tail",{rotation:'+=2', repeat:-1,transformOrigin:'0% 100%', duration:1,ease:Linear.easeNone},{rotation:'-=2'})
        
        TweenMax.staggerFrom([girl], .8, {opacity:0,x:300, ease:Power3.easeOut,}, .2,);
        TweenMax.staggerFrom([text], .8, {opacity:0,x:-300, ease:Power3.easeOut,}, .2,);
    }, [])

    return(
        <Grid container xs={12} className={classes.grid}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4} className={classes.grid}>
                <div>
                    <svg  width="50%" height="400px" viewBox="0 0 556.381 880.754" ref={el=>girl=el} class="demo" className={classes.image}> 
                            <g id="Girl" transform="translate(-18285 -8161)">
                                <g id="Body" transform="translate(86 -51)">
                                <path id="path15317" d="M300.077,851.241,365.5,807.879l137.184-23.253c6.085-23.582,2.787-169.206.505-203.441s-2.281-69.984-35.752-92.046-131-9.1-140.4-15.757-9.4-51.3-9.4-51.3l-8.614,10.183-69.707,28.194-63.832,9.014c-24.261,2.674-42.154,16.9-46.8,41.694-6.753,36.01,3.382,68.4,13.515,102.418,5.483,18.4,47.388,121.394,54.043,145.674,6.285,22.922,17.45,79.668,18.351,96.5h79.47l6.02-4.513" transform="translate(18206.01 8237)" fill="#fad9ae"/>
                                <path id="path15319" d="M282.326,789.619l-45.642-56.8s33.337,78.654,24.669,122.934h22.669l-1.7-66.135" transform="translate(18206.01 8237)" fill="#dcb38b"/>
                                <path id="path15321" d="M187.938,598.879s10.383-56.914,9.614-84.6l6.538,63.066-16.152,21.535" transform="translate(18206.01 8237)" fill="#dcb38b"/>
                                <path id="path15323" d="M499.383,777.451c-37.275-58.575-101.175-226.693-101.175-226.693l-22.061,7.606c-15.685,7.518-31.815,14.013-48.092,20.125-23.087,8.674-47.3,18.081-72.4,13.748-20.223-3.49-39.823-12.136-59.794-17.136,0,0-46.426,81.419,4.564,133.886,9.827,10.109,26.87,25.062,32.849,31.639-2.094,9.567,5.682,13.454,10.764,20.331s28.106,52.029,29.6,63.988c.937,7.492-.706,21.434-2.067,30.809H548.931c-8.121-12.939-24.553-39.024-49.548-78.3" transform="translate(18206.01 8237)" fill="#dd4539"/>
                                <path id="path15325" d="M348.617,573.5,449.03,597.459c-5.7-15.594,4.564-32.33,10.651-47.163s-7.05-30.248-12.756-42.419-8.112-15.633-21.8-23.242c-10.973-6.093-23.414-7.253-35.714-7.749-6.541-.266-11.547,5.314-16.435,8.767-5.043,3.564-8.049,5.87-11.609,1.239-3.133-4.072-8.83-10.135-13.671-11.137-8.314-1.722-14.322,2.574-15.778,11.28-1.38,8.247-.779,17.439.141,25.693a158.485,158.485,0,0,0,4,23.66A321.322,321.322,0,0,0,346.2,567.361c.786,2.054,1.563,4.11,2.415,6.137" transform="translate(18206.01 8237)" fill="#dcb38b"/>
                                <path id="path15333" d="M506.154,706.215C485.109,656.8,437.163,578.59,437.163,578.59l52.308,208.275,13.21-2.24c2.591-10.034,3.481-42.167,3.473-78.41" transform="translate(18206.01 8237)" fill="#dcb38b"/>
                                <path id="path15353" d="M197.156,576.931s-2.789-83.625,1.593-101.545l9.556,1.2s-1.2,96.767,4.38,105.927l-15.529-5.577" transform="translate(18206.01 8237)" fill="#d8232a"/>
                                <path id="path15355" d="M289.142,599.227c15.93-3.582,74.068-24.291,88.4-27.875,8.231-2.056,18.029-6.342,24.887-9.622-2.7-6.969-4.226-10.972-4.226-10.972l-22.06,7.606c-15.686,7.518-31.815,14.013-48.093,20.125-23.087,8.674-47.3,18.081-72.4,13.748-20.223-3.49-39.824-12.136-59.795-17.136,0,0-1.434,2.519-3.517,6.941,7.509,2.446,22.449,7.437,33.883,12.01,9.956,3.981,39.209,10.51,62.918,5.175" transform="translate(18206.01 8237)" fill="#d8232a"/>
                                <path id="path15357" d="M215.034,485.137s21.538,26.235,19.188,44.25c.666-4.156,1.173-8.359,1.5-12.558.556-7.08-1.58-14.211,1.367-20.958,2.837-6.492,9.231-10.783,13.579-16.216l-35.635,5.482" transform="translate(18206.01 8237)" fill="#c09d7a"/>
                                <path id="path15469" d="M246.748,738.655s78.9,12.4,149.911-24.8c0,0-51.849,59.737-149.911,24.8" transform="translate(18206.01 8237)" fill="#c23e35"/>
                                </g>
                                <g id="Face" transform="translate(-171 49)">
                                <path id="path15331" d="M328.883,402.022s20.6,1.013,43.569-27.02,3.714-49.985-10.134-40.865l-21.614,20.6-11.821,47.284" transform="translate(18463.01 8136)" fill="#fad9ae"/>
                                <path id="path15335" d="M318.878,445.887c-.66-6.509-.969-12.809-1.115-17.3-11.344,17.664-25.587,33.25-44.682,45.291-16.483,10.393-36.2,24.612-56.238,18.295-9.828-3.1-19.581-6.373-29.212-10.036A258.134,258.134,0,0,1,163.586,471.9a55.9,55.9,0,0,0-6.917,2.6c16.772,8.7,53.3,27.137,68.12,30.591,18.157,4.238,55.453-12.367,94.089-59.2" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15359" d="M80.99,347.645c13.211,32.4,27.823,66.752,47.783,95.609,14.376,20.787,36.086,30.224,58.859,38.884,9.63,3.663,19.385,6.941,29.211,10.037,20.039,6.316,39.755-7.9,56.238-18.3,42.782-26.977,61.259-71.71,77.2-117.865l9.129-84.44-49.446-94.327-124.758-17.5-72.268,3.044L58.929,241.145l4.565,67.7,17.5,38.8" transform="translate(18463.01 8136)" fill="#fad9ae"/>
                                <path id="path15361" d="M184.448,402.164s-5.777,10.107,4.24,15.317c.266.138.542.274.831.4,0,0-4.884-2.882-5.071-15.722" transform="translate(18463.01 8136)" fill="#c09d7a"/>
                                <path id="path15363" d="M249.231,312.907c1.683,9.528,4.383,18.674,9.438,27,3.782,6.228,8.318,13.646,14.114,18.182a25.8,25.8,0,0,0,12.377,4.966l9.275,1.055,7.169-1.9,10.962-6.326,4.246-6.147s13.773-19.572,15.146-29.374l-16.92-27.743-21.807-9.129-29.162,2.03c-3.344,2.581-6.655,5.206-10.029,7.75-6.117,4.608-6.025,12.749-4.809,19.635" transform="translate(18463.01 8136)" fill="#fffffe"/>
                                <path id="path15365" d="M225.005,448.617c10.851-4.155,20.6-14.718,29.176-21.348,0,0-19.02,14.706-31.191,18.258s-24.342-4.313-24.342-4.313a14.907,14.907,0,0,0,5.831,5.834c7.221,4.246,14.068,4.041,20.526,1.569" transform="translate(18463.01 8136)" fill="#e46c6f"/>
                                <path id="path15371" d="M279.825,360.841c-3.054-3.949-5.084-8.658-7.155-13.009-8.08-16.995-13.125-40.395-4.928-57.233,2.86-5.868,9.235-8.409,15.8-10.224l21.835,9.186s12.742,14.043,11.782,38.708-10.233,32.6-10.233,32.6l-13.468,3.167-10.148-1.4-3.483-1.8" transform="translate(18463.01 8136)" fill="#2d1e13"/>
                                <path id="path15377" d="M248.894,310.692c-.753-5.781-.393-12.048,3.8-16.238,3.246-2.455,6.441-4.98,9.661-7.465l8.541-.6a14.082,14.082,0,0,0-3.034,3.96l-.054.1a.067.067,0,0,0-.006.015c-.021.042-.044.085-.063.127-.03.06-.059.122-.089.182l-.018.037c-.022.048-.045.1-.067.143-.008.016-.015.031-.023.049s-.03.061-.043.093A39.962,39.962,0,0,0,264.6,300a52.537,52.537,0,0,0-15.7,10.694" transform="translate(18463.01 8136)" fill="#bbbcbb"/>
                                <path id="path15383" d="M325.518,323.412a35.374,35.374,0,0,0-2.621-4.835,33.789,33.789,0,0,0-7.462-7.993,55.086,55.086,0,0,0-8.646-19.232l6.54,2.736,10.994,14.823q.246,1.119.418,2.184a74.469,74.469,0,0,1,.777,12.317" transform="translate(18463.01 8136)" fill="#bbbcbb"/>
                                <path id="path15397" d="M340.056,374.1c.923,8.211-10.317,16.211-25.1,17.87s-27.517-3.654-28.437-11.862,10.318-16.211,25.1-17.868,27.516,3.652,28.437,11.86" transform="translate(18463.01 8136)" fill="#f0aa98"/>
                                <path id="path15399" d="M151.556,402.987c.813,7.247-7.445,14.124-18.446,15.358s-20.577-3.642-21.39-10.89,7.445-14.122,18.446-15.357,20.577,3.64,21.39,10.889" transform="translate(18463.01 8136)" fill="#f0aa98"/>
                                <path id="path15403" d="M76.426,301.623c17.116-35.373,52.489-17.5,52.489-17.5s-13.883-11.411-29.668-7.227-22.821,24.723-22.821,24.723" transform="translate(18463.01 8136)" fill="#63492d"/>
                                <path id="path15405" d="M223.964,256.69c9.459-6.058,18.963-11.661,29.98-14.364,11.055-2.714,22.5-2.61,33.723-1.12,6.785.9,13.6,2.115,20.274,3.628a35.321,35.321,0,0,1,3.591.95,188.433,188.433,0,0,0-35.619-9.084c-18.457-2.849-34.918,4.725-48.517,16.921a29.157,29.157,0,0,1-3.432,3.069" transform="translate(18463.01 8136)" fill="#63492d"/>
                                <path id="path15407" d="M241.5,313.414c3.143-5.711,8.165-10.491,13.165-14.576,24.159-19.738,58.857-7.884,73.295,17.624,2.428,4.292,5.73,10.862,5.588,15.97.4-14.326-4.108-30.745-14.591-40.928-13.4-13.024-34.62-18.176-52.54-12.793a53.076,53.076,0,0,0-14.339,6.765c-9.709,6.666-16.863,16.036-17.17,28.193a21.184,21.184,0,0,1,7.354-9.636,43.589,43.589,0,0,0-.762,9.381" transform="translate(18463.01 8136)" fill="#292014"/>
                                <path id="path15409" d="M250.25,288.691s-19.97,5.516-28.527-3.994a28.77,28.77,0,0,0,24.723,7.987l3.8-3.993" transform="translate(18463.01 8136)" fill="#292014"/>
                                <path id="path15411" d="M304.871,315.606c2.131,14.314-2.448,26.854-10.22,28.011s-15.8-9.51-17.931-23.823,2.447-26.856,10.22-28.013,15.8,9.509,17.931,23.825" transform="translate(18463.01 8136)" fill="#1e1308"/>
                                <path id="path15413" d="M317.376,333.67c-1,2.427-5.514,2.87-10.085.989s-7.461-5.37-6.462-7.8,5.513-2.871,10.08-.992,7.466,5.373,6.467,7.8" transform="translate(18463.01 8136)" fill="#fffffe"/>
                                <path id="path15417" d="M146.251,389.334c-2.967-2.652-5.321-6.152-7.641-9.345-9.053-12.474-17.062-30.929-14.161-46.688,1.012-5.494,5.215-8.949,9.687-11.839l17.691,3.076s11.921,9.036,15.765,29.8-1.153,29.8-1.153,29.8l-9.614,5-7.691.961-2.883-.769" transform="translate(18463.01 8136)" fill="#2d1e13"/>
                                <path id="path15435" d="M107.24,363.588c-2.076-2.117-3.327-3.5-3.4-3.576v0a0,0,0,0,1,0,0h0l-4.548-15.518,4.012-10.432,9.365-8.028s20.064-5.082,20.6-5.886c.019-.027.068-.042.146-.042h.047l.006,0h.017s0,0,0,0h.017a.005.005,0,0,0,.005,0h.018a49.649,49.649,0,0,1,7.019,2.466l-6.406-1.114-.094.061c-.017.011-.034.021-.051.033l-.033.021c-3.574,2.327-6.95,5.027-8.63,8.858-9.747,3.424-17.4,11.23-18.381,23.133a46.972,46.972,0,0,0,.293,10.02" transform="translate(18463.01 8136)" fill="#bbbcbb"/>
                                <path id="path15441" d="M100.514,331.587s-19.15,7.9-28.8-.5a28.771,28.771,0,0,0,25.51,4.923l3.291-4.426" transform="translate(18463.01 8136)" fill="#292014"/>
                                <path id="path15443" d="M105.5,363.256c-1.672-5.225-8.152-20.067,5.435-31.354s38.881-11.705,53.095,3.555c0,0-14.424-23.414-38.672-21.115s-33.027,14.633-33.236,25.712,13.378,23.2,13.378,23.2" transform="translate(18463.01 8136)" fill="#292014"/>
                                <path id="path15445" d="M158.876,346.463c3.228,12.47.6,23.93-5.871,25.606s-14.327-7.079-17.553-19.544-.6-23.931,5.87-25.6,14.327,7.076,17.554,19.543" transform="translate(18463.01 8136)" fill="#1e1308"/>
                                <path id="path15447" d="M170.21,361.006c-.908,2.2-5,2.6-9.146.9s-6.768-4.872-5.862-7.074,5-2.6,9.144-.9,6.77,4.873,5.864,7.075" transform="translate(18463.01 8136)" fill="#fffffe"/>
                                </g>
                                <g id="Tail" transform="translate(-212 221)">
                                <path id="path15329" d="M509.238,267.391s25.43,15.989,34.076,41.925c11.524,34.574-7.212,68.151-7.212,68.151C536.1,311.8,509.238,267.391,509.238,267.391Zm36.3-2.662c-30.6-55.929-68.878-106.847-103.081-160.5-13.753-21.58-29.821-43.387-53.31-55.048-21.043-10.447-50.45-11.055-72.225-1.636-9.9,4.281-21.681,10.145-29.014,18.387l12.679,67.45,93.06,165.584s29.289,22.44,27.767,69.985-38.8,78.353-38.8,78.353c50.206-20.538,62-62.885,62-62.885,5.808,33.753,5.181,71.889-16.488,100.121-1.449,1.888-21.337,21.136-21.041,22.1l2.03,6.6s37.02-6.087,57.308-14.708c77.479-32.929,72.52-103.965,72.52-103.965,30.935-42.093,21.3-102.951,6.593-129.829" transform="translate(18494.01 7940)" fill="#6e5032"/>
                                <path id="path15337" d="M416.946,219.175c-4.881-50.28-32.22-77.616-32.22-77.616l-14.155-8.3-10.74,22.456,24.9,52.232,3.579,81.514,5.339,9.5a63.437,63.437,0,0,1,11.536,12.763c5.474-17.523,15.357-55.551,11.766-92.55" transform="translate(18494.01 7940)" fill="#553f26"/>
                                <path id="path15339" d="M332.025,97.371S346.86,74.55,385.656,61.618,489.114,40.7,489.114,40.7s-20.54,28.527-24.723,52.87-22.821,52.109-53.25,55.532-60.858-7.988-60.858-7.988l-12.931-10.65-14.836-6.846,9.509-26.245" transform="translate(18494.01 7940)" fill="#fff101"/>
                                <path id="path15341" d="M339.662,129.4c14.17-5.451,14.445-23.166,13.083-28.89-.915-3.839-7.093-10.117-11.068-13.844a64.27,64.27,0,0,0-9.652,10.7l-8.3,22.921,4.224,2.57,11.718,6.541" transform="translate(18494.01 7940)" fill="#d9ad24"/>
                                <path id="path15343" d="M297.793,98.132l6.087-17.116s-4.564-26.625-26.245-45.643S239.218,12.171,228.568,0c0,0-13.312,81.016,24.723,94.709l19.779,5.325,24.723-1.9" transform="translate(18494.01 7940)" fill="#fff101"/>
                                <path id="path15345" d="M300.83,70.274c-25.431,7.9-20.759,23.039-19.218,25.606l2.215,3.326L291.7,98.6l6.692-2.145,5.49-15.44a70.789,70.789,0,0,0-3.051-10.742" transform="translate(18494.01 7940)" fill="#d9ad24"/>
                                <path id="path15347" d="M298.556,81.4S278.4,76.832,271.548,53.63c0,0,2.664,28.527,24.344,31.569l2.664-3.8" transform="translate(18494.01 7940)" fill="#bf9920"/>
                                <path id="path15349" d="M338.873,102.316a131.131,131.131,0,0,1,59.335-6.466s-39.176,9.128-60.1,11.79l.761-5.324" transform="translate(18494.01 7940)" fill="#bf9920"/>
                                <path id="path15351" d="M287.142,98.892c-2.766-2,5.139-12.517,6.2-14.128,6.343-9.583,15.369-7.01,24.256-2.98,9.522,4.318,20.576,6.116,23.933,17.869,2.283,7.987-2.662,15.976-7.606,20.92s-27.767-7.988-27.767-7.988-18.952-13.646-19.02-13.693" transform="translate(18494.01 7940)" fill="#fff101"/>
                                <path id="path15385" d="M315.435,310.583l-.03-.023a55.169,55.169,0,0,0-8.626-19.213l.01.005a55.088,55.088,0,0,1,8.646,19.231" transform="translate(18494.01 7940)" fill="#25180e"/>
                                <path id="path15391" d="M297.793,98.132l.6-1.676L291.7,98.6l6.094-.469" transform="translate(18494.01 7940)" fill="#fff101"/>
                                <path id="path15467" d="M440.435,230.053s35.856-2.367,63.109-34.069q-6.318-9.585-12.732-19.112c-4.153,15.182-16.477,35.646-50.377,53.181" transform="translate(18494.01 7940)" fill="#826848"/>
                                </g>
                                <g id="Hand" transform="translate(-170 51)">
                                <path id="path15327" d="M362.547,495.239s8.537-17.95,8.976-31.741l1.97,28.677-10.946,3.064" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15367" d="M371.363,596.737s-21.3-30.429-25.1-46.023-9.89-32.71-9.89-43.36,1.521-16.736,2.283-30.429c6.084-1.521,14.453.76,17.876,11.412s-2.282,19.017,5.707,22.441c1.244.342,5.5-24.009,5.8-25.77,2.29-13.743,1.486-23.442.2-37.473-.866-9.438-2.186-19.288.412-28.567,1.289-4.6,8.525-20.925,15.615-16.3,7.452,4.866,4.439,19.051,4.194,26.458-.4,12.317-.337,24.924,2.261,37.023,1.174,5.468,3.22,11.57,7.651,15.336,0,0,9.129-4.564,21.681,5.325s8.748,9.509,14.453,10.65,10.27,4.185,13.312,11.411,4.946,9.129,7.229,20.539-8.4,32.559-12.933,45.644c-3.425,9.889-1.142,13.692,4.183,25.864S500.3,703.239,504.107,727.581s1.9,80.635-12.552,92.808-33.852.76-53.63-21.3-33.625-51-38.949-93.983-7.836-53.6-12.4-72.234-15.213-36.135-15.213-36.135" transform="translate(18463.01 8136)" fill="#fad9ae"/>
                                <path id="path15369" d="M362.8,510.645c4.149,11.548,6.6,32.373,23.013,32.623,0,0-.744-3.025-.761-3.034-11.328-6.476-16.381-18.267-22.252-29.589" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15449" d="M440.112,538.986a16.255,16.255,0,0,0-4.729,3.286c-1.869,1.847-1.512,3.6-1.208,6.036a82.175,82.175,0,0,1,.62,11.231c-.066,5.184-5.109,22.012-9.216,9.872-1.128-3.333-1.683-6.828-2.549-10.228-1.882-7.383-6.984-12.831-4.713-20.908,1.385-4.908,5.321-8.64,8.711-12.224,3.222-3.406,5.931-7.33,9.342-10.549a14.506,14.506,0,0,1,6.961-3.771A26,26,0,0,0,436.542,513c-3.928,1.5-6.31,4.715-8.824,7.91-5.315,6.754-13.467,13.285-12.908,22.737.26,4.372,3.026,8.766,4.644,12.738,1.191,2.919,1.62,6.172,2.376,9.217.855,3.446,1.763,8.337,5.562,9.655,9.534,3.3,10.335-11.99,10.281-17.456a83.4,83.4,0,0,0-1.162-12.425c-.29-1.8,6.441-5.934,8.032-7.251-.367.3-1.824.105-2.38.212a9.717,9.717,0,0,0-2.051.651" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15451" d="M421.193,561.952a7.756,7.756,0,0,1-3.734,4.574c-4.105,1.914-12.735-22.647-14.194-25.9-2.594-5.776-5.246-10.78-3.567-17.23,1.183-4.553,4.659-8.91,6.987-12.942,4.033-6.98,9.021-14.276,17.157-16.676-3.573,1.053-7.3,1.566-10.5,3.585-4.884,3.077-7.686,8.336-10.429,13.221-1.2,2.144-2.351,4.316-3.566,6.453-7.03,12.4,3.092,25.5,8.01,37.068,1.845,4.343,11.432,22.776,16.35,9.566.171-.464-2.5-1.754-2.515-1.715" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15453" d="M398.835,538.615a17.473,17.473,0,0,1-2.28,9.294c-3.042,5.765-13.761-14.743-14.965-16.933-3.245-5.9-4.736-9.891-3.333-16.454,1.03-4.81,3.869-9.337,6.3-13.54a92.185,92.185,0,0,1,9.263-13.019c5.409-6.46,10.044-9.82,19.249-5.94.407.17,2.966.827,1.809.339-8.628-3.637-15.276-4.476-22.263,2.949-9.853,10.467-23.034,28.22-15.189,42.726,3.867,7.148,8.406,20.523,17.51,22.3,6.417,1.251,6.784-8.4,6.824-12.756.007-.549-2.356-2.271-2.356-2.127l-.564,3.16" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15455" d="M423.842,514.443c-5.879,3.58-10.439,13.216-5.606,19.348.537.681,2.111-.52,1.5-1.3-4.813-6.111,2.294-16.448,7.615-19.694,1.689-1.029-2.687,1.142-3.507,1.643" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15457" d="M398.637,524.106c-1.847-1.925-.9-6.933-.478-9.239,1.061-5.736,3.751-13.018,8.43-16.816-6.516,5.292-15.58,18.108-7.952,26.055" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15459" d="M399.558,603.136c-13.684,2.887-22.188-.657-26.751-3.9a151.256,151.256,0,0,1,12.618,29.385c-.445-20.2,10.757-24.619,14.133-25.488" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                <path id="path15461" d="M399.558,603.136c.32-.067.63-.124.956-.2a8.772,8.772,0,0,0-.956.2" transform="translate(18463.01 8136)" fill="#dcb38b"/>
                                </g>
                                <g id="Hair" transform="translate(130 161)">
                                <path id="path15395" d="M359.412,271.575l-49.446-94.328-124.758-17.5-72.268,3.043L58.929,241.146l4.565,67.7,17.5,38.8c13.211,32.4,27.823,66.751,47.783,95.608a76.149,76.149,0,0,0,8.437,10.161c-8.128-18.381-16.208-38.893-18.3-51.931,8.115,5.58,8.621,5.58,13.186,7.1,0,0-29.92-40.063-32.965-88.242s7.1-80.128,7.1-80.128,39.674,76.333,68.548,99.07c.141.111.537.467.423.33-21.807-26.371-25.185-70.08-25.185-70.08s46.233,70.05,98.54,91.067c0,0-38.762-83.13-25.686-143.375,0,0,38.76,54.174,61.177,69.587,0,0-16.344-40.632-14.943-71.921,18.681,19.614,57.9,70.05,62.1,96.2s-9.341,82.661-21.95,101.34c13.077-11.674,24.752-23.817,30.356-40.162a109.259,109.259,0,0,1-.72,14.481c4.087-10.052,7.806-20.358,11.392-30.74l9.129-84.439" transform="translate(18155.01 7995)" fill="#dcb38b"/>
                                <path id="path15401" d="M143.541,269.533s46.232,70.05,98.538,91.067c0,0-38.76-83.13-25.684-143.375,0,0,38.76,54.174,61.177,69.587,0,0-16.345-40.632-14.944-71.921,18.682,19.614,57.91,70.05,62.113,96.2s-9.339,82.661-21.949,101.34c13.077-11.674,24.752-23.817,30.357-40.162,0,0,.464,15.88-3.27,26.154,0,0,6.219-3.108,10.857-12.789.118-.248.237-.5.352-.755,0,0-.468,65.852-12.609,89.2,0,0,32.691-51.84,41.564-140.1,0,0,10.743-.466,12.61,11.677,0,0,35.589-44.078,24.43-123.7s-60.35-93.823-81.649-103.965c-16.23-14.707-77.593-48.178-153.664-26.37S43.969,180.37,28.248,207.756-14.86,324.4,9.99,375.114c-1.015-30.936,2.028-43.614,11.664-56.8,4.565,29.922,13.693,51.222,33.979,72.521s35.5,34.993,40.571,52.743l.508-18.764s20.792,47.163,53.249,68.965c0,0-32.963-63.893-37.527-92.294,8.113,5.58,8.621,5.58,13.185,7.1,0,0-29.921-40.064-32.964-88.242s7.1-80.128,7.1-80.128,39.675,76.333,68.547,99.07c.142.111.538.467.424.33-21.806-26.371-25.185-70.08-25.185-70.08" transform="translate(18155.01 7995)" fill="#6e5032"/>
                                <path id="path15463" d="M101.74,243.957c1.789,3.333,4.708,8.692,8.441,15.259,25.04-4.747,55.089-15.388,91-34.962,0,0-51.957,18.753-99.442,19.7" transform="translate(18155.01 7995)" fill="#826848"/>
                                <path id="path15465" d="M28.182,207.871c-4.213,7.371-9.254,19.158-13.9,33.44,14.823,12.172,40.279,24.4,80.906,20.131,1.254-7.977,2.614-13.918,3.521-17.455-31.834.117-61.081-8.2-70.526-36.116" transform="translate(18155.01 7995)" fill="#826848"/>
                                </g>
                            </g>
                    </svg>
                </div>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={12}>
                <Typography className={classes.text} ref={el=>text=el}>애니메이션입니다.</Typography>
                <Button variant="contained" color="secondary" className={classes.button}>Next Animation</Button>
            </Grid>
        </Grid>
    )
}
