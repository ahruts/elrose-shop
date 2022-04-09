import React from "react";
import { NavLink } from "react-router-dom";
import { CgCloseR } from "react-icons/cg";

function SizeChartModal({onClick}) {
    return (
<div className="modal">
        <div className="size-chart-modal">
                <p className="size-chart-modal__title">Size chart</p>
                <table className="size-chart-modal__table">
                    <tr><th className="size-chart-modal__head-cell">Size</th><th className="size-chart-modal__head-cell">Bust</th><th className="size-chart-modal__head-cell">Waist</th><th className="size-chart-modal__head-cell">Hips</th></tr>
                    <tr className="size-chart-modal__row"><td  className="size-chart-modal__data-cell">34</td><td className="size-chart-modal__data-cell">80</td><td className="size-chart-modal__data-cell">60</td> <td className="size-chart-modal__data-cell">88</td></tr>
                    <tr className="size-chart-modal__row"><td className="size-chart-modal__data-cell">36</td><td className="size-chart-modal__data-cell">84</td><td className="size-chart-modal__data-cell">64</td><td className="size-chart-modal__data-cell">92</td></tr>
                    <tr className="size-chart-modal__row"><td className="size-chart-modal__data-cell">38</td><td className="size-chart-modal__data-cell">88</td><td className="size-chart-modal__data-cell">68</td><td className="size-chart-modal__data-cell">96</td></tr>
                    <tr className="size-chart-modal__row"><td className="size-chart-modal__data-cell">40</td><td className="size-chart-modal__data-cell">92</td><td className="size-chart-modal__data-cell">72</td><td className="size-chart-modal__data-cell">100</td></tr>
                    <tr className="size-chart-modal__row"><td className="size-chart-modal__data-cell">42</td><td className="size-chart-modal__data-cell">96</td><td className="size-chart-modal__data-cell">76</td><td className="size-chart-modal__data-cell">104</td></tr>
                    <tr className="size-chart-modal__row"><td className="size-chart-modal__data-cell">44</td><td className="size-chart-modal__data-cell">100</td><td className="size-chart-modal__data-cell">80</td><td className="size-chart-modal__data-cell">108</td></tr>
                </table>
                <CgCloseR onClick={onClick} className="size-chart-modal__close-btn" />
            </div>
        </div>
    );
}

export default SizeChartModal