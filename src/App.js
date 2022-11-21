import run from "./renderer";

function App() {
  return (
    <div>
      <h4>Nhập dữ liệu</h4>
      <input
        type="text"
        className="cell"
        data-row-index="0"
        placeholder="n"
        id="n"
        defaultValue="10"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="1"
        placeholder="sum_Xi"
        id="sum_Xi"
        defaultValue="114"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="2"
        placeholder="sum_Zi"
        id="sum_Zi"
        defaultValue="73"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="3"
        placeholder="sum_Yi"
        id="sum_Yi"
        defaultValue="1082"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="4"
        placeholder="sum_Xi_sqr"
        id="sum_Xi_sqr"
        defaultValue="1356"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="5"
        placeholder="sum_Yi_sqr"
        id="sum_Yi_sqr"
        defaultValue="120172"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="6"
        placeholder="sum_Zi_sqr"
        id="sum_Zi_sqr"
        defaultValue="541"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="7"
        placeholder="sum_XiZi"
        id="sum_XiZi"
        defaultValue="816"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="8"
        placeholder="sum_YiZi"
        id="sum_YiZi"
        defaultValue="7766"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="9"
        placeholder="sum_XiYi"
        id="sum_XiYi"
        defaultValue="12746"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="10"
        placeholder="k"
        id="k"
        defaultValue="3"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="11"
        placeholder="Xo"
        id="Xo"
        defaultValue="10"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="12"
        placeholder="Zo"
        id="Zo"
        defaultValue="8"
      />
      <br />
      <input
        type="text"
        className="cell"
        data-row-index="13"
        placeholder="hằng số t alpha"
        id="hằng_số_t_alpha"
        defaultValue="2.365"
      />
      <br />
      <button onClick={run}>Submit</button>
      <br />
      <p id="result1"></p>
      <br />
      <p id="result2"></p>
      <br />
      <p id="result3"></p>
      <br />
      <p id="result4"></p>
      <br />
      <p id="result5"></p>
      <br />
      <p id="result6"></p>
      <br />
      <p id="result7"></p>
      <br />
      <p id="result8"></p>
      <br />
      <p id="result9"></p>
      <br />
      <p id="result10"></p>
      <br />
      <p id="result11"></p>
      <br />
      <p id="result12"></p>
      <br />
      <p id="result13"></p>
      <br />
      <p id="result14"></p>
      <br />
      <p id="result15"></p>
    </div>
  );
}

export default App;
