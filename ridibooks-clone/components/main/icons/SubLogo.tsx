import React from 'react';
import Link from 'next/link';
import { SubLogoSVG } from '../styles';

export default function SubLogo(): JSX.Element {
  return (
    <Link href="https://select.ridibooks.com/home" passHref={true}>
      <SubLogoSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299 48">
        <path d="M27.85 31.178c4.947-2.365 7.456-7.115 7.456-14.123 0-6.312-1.45-10.774-4.309-13.263C28.103 1.276 23.318 0 16.775 0H1.555C.422 0 0 .421 0 1.556v44.889C0 47.579.422 48 1.555 48h9.257c1.135 0 1.557-.421 1.557-1.555V33.341H15.824l.15.313 6.176 12.848C22.66 47.521 23.472 48 24.702 48h9.399c.791 0 .913-.276.959-.38.148-.338.074-.792-.22-1.348l-7.5-14.212-.267-.508.517-.249zm-6.451-9.195c-.907 1.051-2.51 1.584-4.765 1.584H12.37V10.475H16.635c2.278 0 3.832.491 4.75 1.499.901.984 1.34 2.647 1.34 5.082 0 2.285-.434 3.897-1.326 4.927zM53.481 0h-9.329c-1.135 0-1.557.422-1.557 1.556v44.888c0 1.134.422 1.556 1.557 1.556h9.329c1.133 0 1.554-.422 1.554-1.556V1.556C55.035.422 54.614 0 53.481 0zM78.315 0H64.639c-1.133 0-1.555.422-1.555 1.556v44.888c0 1.134.422 1.556 1.555 1.556h13.818c7.109 0 12.327-1.807 15.513-5.37 3.213-3.59 4.841-9.858 4.841-18.629 0-8.772-1.64-15.04-4.873-18.628C90.727 1.807 85.472 0 78.315 0zm6.171 34.335c-1.233 1.93-3.38 2.908-6.379 2.908H75.524V10.755h2.444c2.993 0 5.158.975 6.44 2.896C85.635 15.49 86.23 18.875 86.23 24c0 5.119-.572 8.5-1.744 10.335zM117.061 0h-9.33c-1.135 0-1.556.422-1.556 1.556v44.888c0 1.134.421 1.556 1.556 1.556h9.33c1.133 0 1.553-.422 1.553-1.556V1.556c0-1.134-.42-1.556-1.553-1.556zM144.769 47.805c-4.743 0-9.608-.855-12.108-2.127-.487-.238-1.313-.642-1.007-1.738l.965-2.922c.21-.97.784-1.116 1.109-1.116.22 0 .453.063.712.191 2.637 1.149 6.437 1.84 10.146 1.84 6.564 0 10.329-2.496 10.329-6.848 0-4.733-4.377-6.61-9.445-8.784l-.571-.245c-6.322-2.719-12.294-5.287-12.294-13.725 0-5.595 2.603-12.265 15.005-12.265 4.12 0 7.898.683 10.638 1.924.315.135 1.296.557.964 1.746l-.974 2.883c-.091.294-.312 1.008-1.112 1.008-.21 0-.447-.051-.723-.157-2.332-1.003-5.006-1.466-8.43-1.466-6.432 0-9.301 1.951-9.301 6.328 0 4.249 3.37 5.754 7.638 7.659.524.234 1.059.473 1.602.723l.471.215c6.479 2.962 12.599 5.76 12.599 14.286.001 8.001-5.909 12.59-16.213 12.59zM182.436 48c-10.27 0-16.65-6.967-16.65-18.182 0-11.466 5.637-18.311 15.079-18.311 8.853 0 14.354 6.244 14.354 16.296v3.251c0 1.092-.573 1.67-1.656 1.67H171.94c.662 5.8 4.857 9.534 10.74 9.534 3.395 0 5.43-.764 7.61-1.998.27-.158.543-.239.811-.239.352 0 1.003.147 1.409 1.131l.927 2.456c.177.851-.153 1.473-.966 1.913-1.684.925-5.226 2.479-10.035 2.479zm6.806-20.891c-.094-6.27-3.14-9.859-8.378-9.859-5.443 0-8.452 3.316-8.945 9.859zM203.478 47.22c-.7 0-1.535-.29-1.535-1.669V1.929c0-1.049.531-1.604 1.535-1.604h3.023c1.004 0 1.536.555 1.536 1.604v43.622c0 1.379-.836 1.669-1.536 1.669zM231.411 48c-10.27 0-16.65-6.967-16.65-18.182 0-11.466 5.637-18.311 15.079-18.311 8.853 0 14.354 6.244 14.354 16.296v3.251c0 1.092-.573 1.67-1.657 1.67h-21.622c.661 5.8 4.855 9.534 10.739 9.534 3.395 0 5.43-.764 7.61-1.998.27-.158.544-.239.812-.239.352 0 1.003.147 1.408 1.131l.927 2.456c.178.852-.152 1.475-.967 1.914-1.683.924-5.223 2.478-10.033 2.478zm6.806-20.891c-.094-6.27-3.14-9.859-8.378-9.859-5.442 0-8.452 3.316-8.946 9.859zM264.908 47.87c-9.859 0-15.985-6.992-15.985-18.248 0-11.175 5.963-18.116 15.562-18.116 5.18 0 8.176 1.561 8.97 2.04.516.308 1.176.841.957 1.901l-1.06 2.704c-.351.882-.987 1.013-1.335 1.013-.269 0-.557-.076-.859-.226-1.911-.989-3.781-1.429-6.069-1.429-6.472 0-9.892 4.188-9.892 12.113 0 7.822 3.495 12.309 9.589 12.309 2.491 0 4.806-.606 6.881-1.8.334-.154.586-.215.824-.215.293 0 .999.108 1.244 1.107l.963 2.652c.23 1.102-.416 1.517-.986 1.883-1.364.893-4.963 2.312-8.804 2.312zM292.255 47.61c-6.892 0-9.577-3.111-9.577-11.095v-18.29h-3.663c-1.044 0-1.596-.555-1.596-1.603v-2.666c0-1.061.582-1.669 1.596-1.669h3.784V4.724c0-1.049.532-1.604 1.536-1.604h2.781c1.044 0 1.596.555 1.596 1.604v7.563h7.352c1.014 0 1.596.608 1.596 1.669v2.666c0 1.048-.552 1.603-1.596 1.603h-7.352v17.77c0 4.616.832 5.677 4.45 5.677.883 0 1.371-.131 1.842-.257a7.49 7.49 0 0 1 .842-.19c.087-.02.205-.032.313-.032 1.023 0 1.228.996 1.307 1.371l.6 2.516c.237 1.145-.628 1.543-.954 1.692-1.08.543-3.31.838-4.857.838z" />
      </SubLogoSVG>
    </Link>
  );
}
