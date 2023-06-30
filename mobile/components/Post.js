import { View, Text, StyleSheet, Image } from "react-native";

const Post = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logoApp.png")}
          style={styles.logoCompany}
        ></Image>
        <View style={styles.author}>
          <View style={styles.info}>
            <Text style={styles.handi}>Handicrafted by</Text>
            <Text style={styles.name}>Jim HLS</Text>
          </View>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.logoAvatar}
          ></Image>
        </View>
      </View>

      <View style={styles.slogan}>
        <Text style={styles.txt1}>A joke a day keeps the doctor away</Text>
        <Text style={styles.txt2}>
          If you joke wrong way, your teeth have to pay. (Serious)
        </Text>
      </View>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoAvatar: {
    width: 40,
    height: 40,
  },
  logoCompany: {
    width: 50,
    height: 50,
  },
  info: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  handi: {
    fontSize: 9,
    color: "grey",
    fontWeight: "400",
    opacity: 0.8,
  },
  name: {
    fontSize: 9,
    fontWeight: 400,
  },
  author: {
    flexDirection: "row",
  },
  slogan: {
    backgroundColor: "#29b363",
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center",
  },
  txt1: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  txt2: {
    color: "white",
    fontSize: 12,
  },
  content: {
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#727272",
  },
});

export default Post;
