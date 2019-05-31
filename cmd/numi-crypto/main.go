package main

import (
	"fmt"
	"github.com/tidwall/gjson"
	"io/ioutil"
	"log"
	"net/http"
	"os/user"
	"time"
)

func main() {

	usr, err := user.Current()
	if err != nil {
		log.Fatal( err )
	}

	fmt.Println("User home folder:", usr.HomeDir)

	sleepTime := 0*time.Second
	for {
		time.Sleep(sleepTime)
		sleepTime = 5*time.Second

		data := `
		var value = { 
			"eosusdt": %f, 
			"eosusdc": %f, 
			"eoseth": %f, 
			"eosbtc": %f, 
			"ethusdc": %f, 
			"ethusdt": %f, 
			"btcusdc": %f, 
			"btcusdt": %f
		}`

		data = fmt.Sprintf(data,
			getPrice("EOSUSDT"),
			getPrice("EOSUSDC"),
			getPrice("EOSETH"),
			getPrice("EOSBTC"),
			getPrice("ETHUSDC"),
			getPrice("ETHUSDT"),
			getPrice("BTCUSDC"),
			getPrice("BTCUSDT"),
		)
		err := ioutil.WriteFile(usr.HomeDir + "/Library/Application Support/com.dmitrynikolaev.numi/extensions/crypto-prices.js", []byte(data), 0644)
		if err != nil {
			log.Println("Error: ", err)
		}
	}

}

func getPrice(currency string) (float64){
	resp, err := http.Get("https://api.binance.com/api/v1/klines?symbol="+currency+"&interval=1d&limit=1")
	if err != nil {
		return 0
	}
	defer resp.Body.Close()

	cnt, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return 0
	}

	if resp.StatusCode != 200 {
		err = fmt.Errorf("binance api, status %d != 200: %s", resp.StatusCode, string(cnt))
		return 0
	}

	return gjson.GetBytes(cnt, "0.4").Float()
}