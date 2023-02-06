import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames";
import { useState } from "react";
import { trendingDown, trendingUp } from "../../helpers/table_helpers";
import { Link } from "react-router-dom";

export default function CryptoItems(props) {

  const [dropdown, setDropdown] = useState(false);

  const percentChange = classNames({
    "positive": props.change >= 0,
    "negative": props.change < 0
  });
  
  return (
    <>
      <tr>
        <td>{props.rank}</td>
        <td className="symbol-data"> 
          <Link to={`/crypto/${props.id}`}>
            <img src={props.logo} alt="logo"/>  {props.name} ({props.symbol.toUpperCase()})
          </Link>
        </td>
        <td>${props.formatNumber(props.price)}</td>
        <td className={percentChange}>{props.change >= 0 ? trendingUp : trendingDown} {props.change}%</td>
        <td>${props.formatNumber(props.high)}</td>
        <td>${props.formatNumber(props.low)}</td>
        <td>${props.formatNumber(props.volume)}</td>
        <td>${props.formatNumber(props.marketCap)}</td>
        <td onClick={() => setDropdown(!dropdown)} ><button className="btn btn-outline-warning"><FontAwesomeIcon icon={faCaretDown} /></button></td>
      </tr>
      {dropdown && <tr><td colSpan={9}>Chart</td></tr>}
    </>
  );
};