import React from 'react'
export const Google = ({ color, fontSize = 'small', size = '0' }) => {
    let fontSizeN = 18;
    if (fontSize === 'small') {
        fontSizeN = 18;
    } else if (fontSize === 'medium') {
        fontSizeN = 22;
    } else if (fontSize === 'large') {
        fontSizeN = 32;
    }
    if (Number(size) > 0) {
        fontSizeN = Number(size);
    }
    return (
        <svg
            width={fontSizeN}
            height={fontSizeN}
            viewBox="0 0 140.158 141.293"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                style={{
                    fill: `${color || '#4385f2'}  `,
                    strokeWidth: 0.282222,
                }}
                d="M69.714 294.384c-56.496-3.455-85.782-70.81-50.064-115.144 31.914-39.613 94.094-32.877 116.936 12.669 24.36 48.574-12.964 105.77-66.872 102.475Zm15.381-6.18c51.415-9.67 71.536-72.487 35.224-109.97-37.89-39.114-104.088-16.385-110.44 37.92-5.043 43.108 33.384 79.917 75.216 72.05zm20.038-30.404c-12.256-9.505-11.762-9.011-10.146-10.132 2.794-1.935 5.889-6.049 7.294-9.694 1.636-4.24 2.886-3.822-11.904-3.983-11.075-.121-12.96-.202-13.19-.565-.417-.66-.358-17.867.063-18.288.503-.503 45.19-.49 45.596.014 1.097 1.36 1.445 13.054.536 17.992-2.062 11.2-5.925 19.206-12.562 26.035-1.903 1.959-1.147 2.142-5.687-1.379z"
                transform="translate(-4.034 -153.227)"
            />
            <path
                style={{
                    fill: `${color || '#f8b907'}  `,
                    strokeWidth: 0.282222,
                }}
                d="M32.124 244.786c-.175-.427-.717-1.724-1.203-2.883-3.94-9.385-4.435-21.723-1.306-32.492.848-2.919 2.69-7.366 3.002-7.253.127.045 3.86 2.813 8.296 6.15 9.139 6.876 8.255 5.687 7.345 9.878-.625 2.881-.61 8.474.032 11.43.823 3.79 1.516 2.887-7.504 9.78-9.064 6.927-8.24 6.415-8.662 5.39z"
                transform="translate(-4.034 -153.227)"
            />
            <path
                style={{
                    fill: `${color || '#e74335'}  `,
                    strokeWidth: 0.282222,
                }}
                d="M40.74 208.091c-9.01-6.83-8.904-6.44-3.684-13.47 16.538-22.276 47.22-26.734 69.559-10.107 1.358 1.01 2.47 1.987 2.47 2.17 0 .65-13.761 14.091-14.24 13.908-.246-.095-1.175-.666-2.065-1.27-14.663-9.946-35.738-3.713-42.697 12.63-1.186 2.783.148 3.335-9.344-3.86z"
                transform="translate(-4.034 -153.227)"
            />
            <path
                style={{
                    fill: `${color || '#34a752'}  `,
                    strokeWidth: 0.282222,
                }}
                d="M70.42 272.912c-12.848-1.654-25.402-9.039-33.304-19.591-1.914-2.557-4.639-7.47-4.315-7.78 6.66-6.388 16.333-12.197 17.157-10.302 6.83 15.71 23.777 21.942 40.577 14.921 2.03-.848 3.155-1.182 3.386-1.006.19.145 1.617 1.278 3.169 2.518 1.552 1.24 4.79 3.754 7.196 5.585 2.406 1.83 4.478 3.423 4.604 3.539.575.527-6.207 5.461-10.39 7.558-7.607 3.813-19.22 5.698-28.08 4.558z"
                transform="translate(-4.034 -153.227)"
            />
        </svg>
    )
}
