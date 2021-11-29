import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export function SkillCard(props) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {props.skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  }
})