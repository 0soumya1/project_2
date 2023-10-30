import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import style from './style';

const App = () => {
  const [chapterList, setChapterList] = useState('');

  let chapter = [
    {
        id: 2,
        country_id: 1,
        state_id: 12,
        name: "Inspirer Wing",
        address: "SARDARDHAM, Ahmedabad, Gujarat, India",
    }
  ]

  const BASE_URL = 'https://gpbonetwork.in/api/v2/getChapters';
  const token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI2OWZiZTM2OTY0MjI2ZDcyMGNhMTlhZGI4ZGUxOWY0ODViYzVhOTY3ZTlhZWMyMjQ4MjEwYWM3ZDUwYjI5ZTAzZDYyNzQwMWMxMWZlMjQ0In0.eyJhdWQiOiIxIiwianRpIjoiMjY5ZmJlMzY5NjQyMjZkNzIwY2ExOWFkYjhkZTE5ZjQ4NWJjNWE5NjdlOWFlYzIyNDgyMTBhYzdkNTBiMjllMDNkNjI3NDAxYzExZmUyNDQiLCJpYXQiOjE2OTg2NDc0MjYsIm5iZiI6MTY5ODY0NzQyNiwiZXhwIjoxNzMwMjY5ODI2LCJzdWIiOiIzMzY1Iiwic2NvcGVzIjpbXX0.Qe5-GmSvwTY53Mge7eWKZzQ9Y-cYS5uOWTgqpvP1ES_NVM0eE6-0CZyZX6LIKIgFs965ZH3nSYNkcomGmvlyLRbvpgPSWJNupKDu8O6TijfwnzrREscIZSf-M9mjHr4HcNKoSLXu0idkHrv9KquWR5QMrLOaAhQ1BYpIFReCdI0TTPVTZCRm4JnynOqwa_tfLS4QRkSc8wBuyiPoxgvebStB57zZBn59zeI9GS1zV4Y4mo4MffZ9ROpKOHInqSunxRRa5ELBmtGYy_9nN3XzPPROC1YG1GtyQbcsKFbJSVZrl8_hsltuQRiNmwgO-bfi2H82HHQuxoPHEI8GaBqPacPEesusDombrWZhsxmeVFaCuyjSnrWiARR2I9ZgD-trFP1-0Kc2kBT6fUqjKaCYD2F3vmTpxR9J9JuHj6YN2jHxURg7_z0CK5cdWNm9ppf6aGgg11vl8rlaG-T0fe7BUaY0ZIOg8aVyucg_0LK1Dj060AnxzdD1ES-SBC4LH7aGCSYA4D6D_-kxNU8g2tXMJtxph4l3Tk7FecOELRj-Dzz6p82O2587AqiZHW-wvsurLFZ5fNoZcwFwQ9XyjLVuvTgGY4JpG9yBwvnORdFqRy5GMCh2Yg9GQAjwqyqBlycl9um4OYMJ3nkBRjGVNbCRh18o1wDlFmbWT5Rs5ux_L8M';

  const headerData = {Accept: 'application/json', Authorization: token};

  // useEffect(() => {
  //   console.log(chapterList, 'list');
  // }, [chapterList]);

  useEffect(() => {
    handleGetChapters();
  }, []);

  const handleGetChapters = () => {
    let data = {};

    axios
      .post(BASE_URL, data, {headers: headerData})
      .then(res => {
        console.log(res?.data?.chapter, 'res ');
        setChapterList(res?.data?.chapter);
      })
      .catch(() => {
        console.log('err in api');
      });
  };
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Text>ChapterList</Text>
       {console.log(chapterList,"chapterlist")}
        {
          <FlatList
            data={chapter}
            renderItem={({item}) => (
              <>
                <View style={style.card}>
                  <Text>Country_id: {item?.country_id}</Text>
                  <Text>State_id: {item?.state_id}</Text>
                  <Text>Name: {item?.name}</Text>
                  <Text>Address: {item?.address}</Text>
                </View>
              </>
            )}
          />
        }
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
