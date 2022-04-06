import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const Users: React.FC<Props> = ({
  width,
  height,
  className,
  pathClassName,
}) => {
  return (
    <svg
      width={width || "18"}
      height={height || "16"}
      className={className ? className : ""}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        d="M6.3 7.11111C7.01201 7.11111 7.70804 6.90258 8.30005 6.51189C8.89207 6.1212 9.35349 5.5659 9.62597 4.91621C9.89844 4.26652 9.96973 3.55161 9.83083 2.8619C9.69192 2.17219 9.34905 1.53865 8.84558 1.0414C8.34212 0.544146 7.70066 0.205512 7.00233 0.0683206C6.30399 -0.0688713 5.58015 0.00154055 4.92234 0.270652C4.26453 0.539764 3.70228 0.995488 3.30671 1.5802C2.91114 2.1649 2.7 2.85233 2.7 3.55556C2.7 4.49855 3.07928 5.40292 3.75442 6.06971C4.42955 6.73651 5.34522 7.11111 6.3 7.11111ZM6.3 1.77778C6.65601 1.77778 7.00402 1.88204 7.30003 2.07739C7.59603 2.27273 7.82675 2.55038 7.96298 2.87523C8.09922 3.20008 8.13487 3.55753 8.06541 3.90238C7.99596 4.24724 7.82453 4.56401 7.57279 4.81263C7.32106 5.06126 7.00033 5.23058 6.65116 5.29917C6.302 5.36777 5.94008 5.33256 5.61117 5.19801C5.28226 5.06345 5.00114 4.83559 4.80335 4.54324C4.60557 4.25088 4.5 3.90717 4.5 3.55556C4.5 3.08406 4.68964 2.63188 5.02721 2.29848C5.36477 1.96508 5.82261 1.77778 6.3 1.77778ZM13.5 8.88889C14.034 8.88889 14.556 8.73249 15 8.43948C15.4441 8.14646 15.7901 7.72998 15.9945 7.24271C16.1988 6.75544 16.2523 6.21926 16.1481 5.70198C16.0439 5.1847 15.7868 4.70955 15.4092 4.33661C15.0316 3.96367 14.5505 3.70969 14.0267 3.6068C13.503 3.5039 12.9601 3.55671 12.4668 3.75854C11.9734 3.96038 11.5517 4.30217 11.255 4.7407C10.9584 5.17923 10.8 5.69481 10.8 6.22222C10.8 6.92947 11.0845 7.60774 11.5908 8.10784C12.0972 8.60794 12.7839 8.88889 13.5 8.88889ZM13.5 5.33333C13.678 5.33333 13.852 5.38547 14 5.48314C14.148 5.58081 14.2634 5.71964 14.3315 5.88206C14.3996 6.04448 14.4174 6.22321 14.3827 6.39564C14.348 6.56806 14.2623 6.72645 14.1364 6.85076C14.0105 6.97508 13.8502 7.05973 13.6756 7.09403C13.501 7.12833 13.32 7.11073 13.1556 7.04345C12.9911 6.97617 12.8506 6.86224 12.7517 6.71606C12.6528 6.56989 12.6 6.39803 12.6 6.22222C12.6 5.98647 12.6948 5.76038 12.8636 5.59368C13.0324 5.42699 13.2613 5.33333 13.5 5.33333ZM13.5 9.77778C12.5026 9.77887 11.5339 10.1072 10.746 10.7111C9.86446 9.84387 8.74265 9.25386 7.52204 9.01549C6.30143 8.77712 5.03669 8.90106 3.8873 9.37168C2.73792 9.8423 1.75537 10.6385 1.06357 11.6599C0.371762 12.6814 0.00168317 13.8822 0 15.1111C0 15.3469 0.0948211 15.573 0.263604 15.7397C0.432387 15.9064 0.661305 16 0.9 16C1.13869 16 1.36761 15.9064 1.5364 15.7397C1.70518 15.573 1.8 15.3469 1.8 15.1111C1.8 13.9324 2.27411 12.8019 3.11802 11.9684C3.96193 11.1349 5.10653 10.6667 6.3 10.6667C7.49347 10.6667 8.63807 11.1349 9.48198 11.9684C10.3259 12.8019 10.8 13.9324 10.8 15.1111C10.8 15.3469 10.8948 15.573 11.0636 15.7397C11.2324 15.9064 11.4613 16 11.7 16C11.9387 16 12.1676 15.9064 12.3364 15.7397C12.5052 15.573 12.6 15.3469 12.6 15.1111C12.6021 14.0697 12.3358 13.0449 11.826 12.1333C12.2237 11.8229 12.7019 11.6294 13.2058 11.5748C13.7097 11.5203 14.219 11.6069 14.6754 11.8249C15.1317 12.0428 15.5168 12.3833 15.7864 12.8072C16.056 13.2312 16.1994 13.7216 16.2 14.2222C16.2 14.458 16.2948 14.6841 16.4636 14.8508C16.6324 15.0175 16.8613 15.1111 17.1 15.1111C17.3387 15.1111 17.5676 15.0175 17.7364 14.8508C17.9052 14.6841 18 14.458 18 14.2222C18 13.0435 17.5259 11.913 16.682 11.0795C15.8381 10.246 14.6935 9.77778 13.5 9.77778Z"
        fill="#696D8C"
      />
    </svg>
  );
};

export default Users;
