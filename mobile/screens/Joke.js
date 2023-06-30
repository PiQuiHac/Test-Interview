import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import Post from "../components/Post";

const Joke = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const posts = [
    {
      content:
        'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
    },
    {
      content:
        'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    },
    {
      content:
        'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, \'I am going to eat that pussy once Jimmy leaves for school today!\'',
    },
    {
      content:
        'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it\'s either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"',
    },
    {
      content: "That's all the jokes for today! Come back another day!",
    },
  ];

  const updateVote = async (id, vote) => {
    try {
      await fetch(`https://649d76e59bac4a8e669dc7a1.mockapi.io/jokes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vote),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPost = (status) => {
    if (currentPostIndex < posts.length - 1) {
      if (status == "fun") {
        updateVote(currentPostIndex, { fun: true });
      } else {
        updateVote(currentPostIndex, { fun: false });
      }
      setCurrentPostIndex(currentPostIndex + 1);
    } else {
      Alert.alert(
        "Message",
        "That's all the jokes for today! Come back another day!",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Post content={posts[currentPostIndex].content} />
      </View>

      <View style={styles.footer}>
        <View style={styles.frameButton}>
          <TouchableOpacity
            style={styles.buttonFunny}
            onPress={() => handleNextPost("fun")}
          >
            <Text style={styles.funny}>This is Funny!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNotFunny}
            onPress={() => handleNextPost("not fun")}
          >
            <Text style={styles.funny}>This is not funny.</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.notify}>
          This appis created as part of Hlsolutions program. The materials con-
          tained on this website are provided for general information only and
          do not constitute any form of advice. HLS assumes no responsibility
          for the accuracy of any particular statement and accepts no liability
          for any loss or damage which may arise from reliance on the infor-
          mation contained on this site.
        </Text>
        <Text style={styles.coppyRight}>Copyright 2021 HLS</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },

  post: {
    marginTop: 20,
  },

  frameButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
  },

  buttonFunny: {
    backgroundColor: "#2c7edb",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 30,
  },

  buttonNotFunny: {
    backgroundColor: "#29b363",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  funny: {
    color: "white",
  },

  notFunny: {
    color: "white",
  },

  notify: {
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    padding: 10,
    color: "#727272",
    fontSize: 12,
    textAlign: "center",
  },
  coppyRight: {
    textAlign: "center",
  },
  footer: {
    marginBottom: 10,
  },
});

export default Joke;
