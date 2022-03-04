import React from "react";
import { Link, NavLink } from "react-router-dom";

const sideBarData = [
    {
        menu: 'Tableau de bord',
        path: '/',
        icon: <svg className="nav-icon fill-current" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.73956 15.8178V13.2621C6.73954 12.6144 7.29991 12.0883 7.99401 12.0842H10.5426C11.2398 12.0842 11.805 12.6115 11.805 13.2621V13.2621V15.8104C11.805 16.3721 12.2907 16.8286 12.8927 16.8327H14.6315C15.4436 16.8346 16.2231 16.535 16.7981 15.9999C17.373 15.4649 17.6962 14.7383 17.6962 13.9806V6.72089C17.6961 6.10884 17.4054 5.52828 16.9022 5.1356L10.9952 0.727906C9.9626 -0.043049 8.48786 -0.0181442 7.48588 0.787169L1.70587 5.1356C1.17892 5.5167 0.863966 6.09898 0.848402 6.72089V13.9732C0.848402 15.5524 2.2205 16.8327 3.91307 16.8327H5.61214C5.90199 16.8346 6.1807 16.7286 6.38641 16.538C6.59212 16.3475 6.70781 16.0882 6.7078 15.8178H6.73956Z" />
        </svg>,

    },
    {
        menu: 'Absences',
        path: '/absences',
        icon: <svg className="nav-icon fill-current" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.1835 0.80653L12.1844 1.43122C14.627 1.61113 16.2405 3.17534 16.2431 5.57414L16.2528 12.5956C16.2563 15.211 14.5079 16.8202 11.7055 16.8243L4.86006 16.8327C2.07514 16.836 0.304902 15.1885 0.3014 12.5656L0.291769 5.62662C0.288267 3.21199 1.84488 1.65194 4.28749 1.44121L4.28662 0.816525C4.28574 0.450042 4.57465 0.174347 4.95987 0.174347C5.34508 0.173514 5.63399 0.448376 5.63487 0.814859L5.63574 1.3979L10.8361 1.39124L10.8353 0.808196C10.8344 0.441713 11.1233 0.16685 11.5085 0.166018C11.885 0.165185 12.1826 0.440047 12.1835 0.80653ZM1.64089 5.88399L14.8958 5.86733V5.57581C14.8581 3.78504 13.9021 2.84551 12.1861 2.70558L12.187 3.34692C12.187 3.70508 11.8902 3.9891 11.5138 3.9891C11.1285 3.98994 10.8388 3.70674 10.8388 3.34859L10.8379 2.67393L5.63749 2.68059L5.63837 3.35442C5.63837 3.71341 5.35033 3.9966 4.96512 3.9966C4.5799 3.99743 4.29012 3.71507 4.29012 3.35609L4.28924 2.71474C2.58204 2.87549 1.63739 3.81835 1.64002 5.62495L1.64089 5.88399ZM11.1452 9.66959V9.67875C11.1539 10.0619 11.4866 10.3526 11.8902 10.3443C12.2842 10.3351 12.5985 10.0178 12.5897 9.63461C12.5714 9.26813 12.2553 8.96911 11.8622 8.96994C11.4595 8.97827 11.1443 9.28645 11.1452 9.66959ZM11.8683 13.4094C11.4656 13.4011 11.1408 13.0854 11.1399 12.7022C11.1312 12.3191 11.4542 12.0018 11.857 11.9926H11.8657C12.2772 11.9926 12.6107 12.3083 12.6107 12.6997C12.6116 13.0912 12.2789 13.4086 11.8683 13.4094ZM7.53818 9.68292C7.55569 10.0661 7.88925 10.3651 8.29197 10.3484C8.68594 10.3309 9.00024 10.0144 8.98273 9.63128C8.9731 9.25646 8.64917 8.96494 8.2552 8.96578C7.85248 8.98244 7.5373 9.29978 7.53818 9.68292ZM8.29547 13.3719C7.89275 13.3886 7.56006 13.0895 7.54168 12.7064C7.54168 12.3233 7.85598 12.0068 8.2587 11.9893C8.65267 11.9884 8.97748 12.28 8.98623 12.6539C9.00462 13.0379 8.68944 13.3544 8.29547 13.3719ZM3.93117 9.71207C3.94868 10.0952 4.28224 10.3951 4.68496 10.3776C5.07893 10.3609 5.39323 10.0436 5.37485 9.66043C5.36609 9.28562 5.04216 8.9941 4.64732 8.99493C4.24459 9.01159 3.93029 9.32893 3.93117 9.71207ZM4.68847 13.3761C4.28574 13.3936 3.95306 13.0937 3.93467 12.7106C3.9338 12.3274 4.24897 12.0101 4.65169 11.9934C5.04566 11.9926 5.37047 12.2841 5.37922 12.6589C5.39761 13.0421 5.08331 13.3594 4.68847 13.3761Z" />
        </svg>
    },
    {
        menu: 'Note de frais',
        path: '/note-de-frais',
        icon: <svg className="nav-icon fill-current" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.54626 12.1577H10.3223C10.6822 12.1577 10.9807 11.8743 10.9807 11.5327C10.9807 11.191 10.6822 10.916 10.3223 10.916H5.54626C5.1863 10.916 4.8878 11.191 4.8878 11.5327C4.8878 11.8743 5.1863 12.1577 5.54626 12.1577ZM8.51371 6.74935H5.54626C5.1863 6.74935 4.8878 7.03268 4.8878 7.37435C4.8878 7.71602 5.1863 7.99102 5.54626 7.99102H8.51371C8.87367 7.99102 9.17217 7.71602 9.17217 7.37435C9.17217 7.03268 8.87367 6.74935 8.51371 6.74935ZM14.7791 6.02069C14.9855 6.01845 15.2102 6.01602 15.4144 6.01602C15.6338 6.01602 15.8094 6.18268 15.8094 6.39102V13.091C15.8094 15.1577 14.0448 16.8327 11.8675 16.8327H4.87902C2.59637 16.8327 0.735125 15.0743 0.735125 12.9077V3.92435C0.735125 1.85768 2.50857 0.166016 4.69465 0.166016H9.38288C9.61114 0.166016 9.78673 0.341016 9.78673 0.549349V3.23268C9.78673 4.75768 11.1124 6.00768 12.7191 6.01602C13.0943 6.01602 13.4252 6.01865 13.7147 6.02096C13.94 6.02275 14.1402 6.02435 14.3169 6.02435C14.4419 6.02435 14.6039 6.02259 14.7791 6.02069ZM15.0212 4.80435C14.2995 4.80685 13.4488 4.80435 12.8369 4.79852C11.8659 4.79852 11.0661 4.03935 11.0661 3.11768V0.921016C11.0661 0.561849 11.5252 0.383516 11.7877 0.642682C12.2626 1.1113 12.9149 1.75533 13.5644 2.39655C14.2132 3.03699 14.8591 3.67462 15.3223 4.13185C15.5787 4.38435 15.3908 4.80352 15.0212 4.80435Z" />
        </svg>

    },
    {
        menu: 'Bulletin de paie',
        path: '/bulletin-de-paie',
        icon: <svg className="nav-icon fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5569 0.166016H11.9885C14.7276 0.166016 16.2528 1.64935 16.2528 4.19102V12.7993C16.2528 15.3827 14.7276 16.8327 11.9885 16.8327H4.5569C1.86126 16.8327 0.291763 15.3827 0.291763 12.7993V4.19102C0.291763 1.64935 1.86126 0.166016 4.5569 0.166016ZM4.79632 4.04935V4.04102H7.44674C7.82892 4.04102 8.13927 4.33268 8.13927 4.69018C8.13927 5.05768 7.82892 5.34935 7.44674 5.34935H4.79632C4.41414 5.34935 4.10468 5.05768 4.10468 4.69935C4.10468 4.34102 4.41414 4.04935 4.79632 4.04935ZM4.79632 9.11601H11.7482C12.1295 9.11601 12.4399 8.82435 12.4399 8.46601C12.4399 8.10768 12.1295 7.81518 11.7482 7.81518H4.79632C4.41414 7.81518 4.10468 8.10768 4.10468 8.46601C4.10468 8.82435 4.41414 9.11601 4.79632 9.11601ZM4.79632 12.9243H11.7482C12.102 12.891 12.3689 12.6068 12.3689 12.2743C12.3689 11.9327 12.102 11.6493 11.7482 11.616H4.79632C4.5303 11.591 4.27315 11.7077 4.13128 11.9243C3.9894 12.1327 3.9894 12.4077 4.13128 12.6243C4.27315 12.8327 4.5303 12.9577 4.79632 12.9243Z" />
        </svg>
    },
    {
        menu: 'Validation',
        path: '/validation',
        icon: <svg className="nav-icon fill-current" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.43285 0.166016H13.1207C16.1267 0.166016 18.1396 2.14935 18.1396 5.09935V11.9085C18.1396 14.8493 16.1267 16.8327 13.1207 16.8327H5.43285C2.42686 16.8327 0.405128 14.8493 0.405128 11.9085V5.09935C0.405128 2.14935 2.42686 0.166016 5.43285 0.166016ZM8.76693 10.991L12.9789 7.03268C13.2804 6.74935 13.2804 6.29102 12.9789 5.99935C12.6774 5.71602 12.1808 5.71602 11.8793 5.99935L8.21717 9.44102L6.6654 7.98268C6.36391 7.69935 5.86735 7.69935 5.56586 7.98268C5.26438 8.26602 5.26438 8.72435 5.56586 9.01602L7.67626 10.991C7.82701 11.1327 8.02209 11.1993 8.21717 11.1993C8.42111 11.1993 8.61619 11.1327 8.76693 10.991Z" />
        </svg>
    },
    {
        menu: 'Temps de travail',
        path: '/temps-de-travail',
        icon: <svg className="nav-icon fill-current" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"clipRule="evenodd" d="M8.1234 1.43183C7.52899 1.43183 7.02331 1.82002 6.88136 2.34322H11.6543C11.5124 1.82002 11.0067 1.43183 10.4123 1.43183H8.1234ZM13.0028 2.34322H14.7594C16.6225 2.34322 18.1395 3.78625 18.1395 5.55839C18.1395 5.55839 18.0863 6.3086 18.0685 7.35332C18.0668 7.43602 18.0242 7.51703 17.9541 7.56598C17.5274 7.86218 17.137 8.1069 17.1015 8.12378C15.6288 9.05205 13.9175 9.70521 12.0944 10.0301C11.9755 10.052 11.8584 9.99381 11.798 9.89424C11.287 9.06217 10.3324 8.5204 9.26784 8.5204C8.21034 8.5204 7.24687 9.05627 6.72078 9.88917C6.65957 9.98706 6.54424 10.0436 6.42624 10.0225C4.6182 9.69677 2.90685 9.04445 1.44302 8.13222L0.591344 7.57526C0.520371 7.53307 0.476012 7.45712 0.476012 7.37273C0.449397 6.94235 0.405039 5.55839 0.405039 5.55839C0.405039 3.78625 1.9221 2.34322 3.78515 2.34322H5.53287C5.70143 1.1196 6.79264 0.166016 8.1234 0.166016H10.4123C11.743 0.166016 12.8343 1.1196 13.0028 2.34322ZM17.8379 9.17871L17.8024 9.19559C16.0103 10.3264 13.8545 11.0774 11.5922 11.3897C11.2728 11.4319 10.9535 11.2378 10.8647 10.934C10.6696 10.242 10.0397 9.7863 9.28559 9.7863H9.27671H9.25897C8.50488 9.7863 7.87499 10.242 7.67981 10.934C7.59109 11.2378 7.27172 11.4319 6.95233 11.3897C4.69006 11.0774 2.53424 10.3264 0.742162 9.19559C0.733291 9.18715 0.644574 9.13652 0.573601 9.17871C0.493755 9.22091 0.493755 9.32217 0.493755 9.32217L0.555857 13.6259C0.555857 15.3981 2.06404 16.8327 3.92709 16.8327H14.6086C16.4716 16.8327 17.9798 15.3981 17.9798 13.6259L18.0508 9.32217C18.0508 9.32217 18.0508 9.22091 17.971 9.17871C17.9266 9.15339 17.8734 9.16183 17.8379 9.17871ZM9.93322 12.7146C9.93322 13.069 9.64045 13.3475 9.26784 13.3475C8.9041 13.3475 8.60247 13.069 8.60247 12.7146V11.626C8.60247 11.28 8.9041 10.993 9.26784 10.993C9.64045 10.993 9.93322 11.28 9.93322 11.626V12.7146Z" />
        </svg>

    },
    {
        menu: 'Mon compte',
        path: '/mon-compte',
        icon: <svg className="nav-icon fill-current" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.65723 0.166016H5.65436C6.90464 0.166016 7.90663 1.12435 7.90663 2.30018V5.14102C7.90663 6.32435 6.90464 7.27435 5.65436 7.27435H2.65723C1.41582 7.27435 0.404951 6.32435 0.404951 5.14102V2.30018C0.404951 1.12435 1.41582 0.166016 2.65723 0.166016ZM2.65723 9.7241H5.65436C6.90464 9.7241 7.90663 10.6749 7.90663 11.8583V14.6991C7.90663 15.8741 6.90464 16.8324 5.65436 16.8324H2.65723C1.41582 16.8324 0.404951 15.8741 0.404951 14.6991V11.8583C0.404951 10.6749 1.41582 9.7241 2.65723 9.7241ZM15.8872 0.166016H12.8901C11.6398 0.166016 10.6378 1.12435 10.6378 2.30018V5.14102C10.6378 6.32435 11.6398 7.27435 12.8901 7.27435H15.8872C17.1287 7.27435 18.1395 6.32435 18.1395 5.14102V2.30018C18.1395 1.12435 17.1287 0.166016 15.8872 0.166016ZM12.8901 9.7241H15.8872C17.1287 9.7241 18.1395 10.6749 18.1395 11.8583V14.6991C18.1395 15.8741 17.1287 16.8324 15.8872 16.8324H12.8901C11.6398 16.8324 10.6378 15.8741 10.6378 14.6991V11.8583C10.6378 10.6749 11.6398 9.7241 12.8901 9.7241Z" />
        </svg>

    }

]

const Sidebar = () => {
    const navItemCname = "flex pl-[38px] items-center nav-item";
    const navLinkClassName = ({ isActive }) => isActive ? navItemCname + ' bg-white text-[#399AB3]' : navItemCname + ' bg-primary-color text-[#DADADA]';


    return (
        <div className="bg-sidebar text-white w-[300px] fixed pt-[41px] h-full">

            <span className="logo-font logo-style">
                <a href="#">  Uptimise  </a>
            </span> 

            <nav className="py-10">
                <ul>
                    {
                        sideBarData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink className={navLinkClassName} to={item.path}>
                                        {item.icon}
                                        {item.menu}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar;