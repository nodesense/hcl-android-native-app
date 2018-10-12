// app/components/SqliteAccess.js
import React, {Component} from "react";

import {View, Text, Button, Alert} from "react-native";

import * as sqlite from "../core/Sqlite";


export default class SqliteAccess extends Component {
    static navigationOptions = {
        title: 'SQLite'    
    }

    constructor(props) {
        super(props);

        this.state = {
           
        }
    }

    componentDidMount() {
        
    }

    open = () => {
        sqlite.open()
        .then ( () => {
            Alert.alert("Open Database success");
        })
        .catch( () => {
            Alert.alert("Could not open db");
        })
    }

    //txn.executeSql('CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))', []);
  
    dropTable = () => {
        console.log('drop table');
        sqlite.executeSql('DROP TABLE IF EXISTS Users', [])
        .then (result => {
            Alert.alert("SUCCESS " + JSON.stringify(result));
        })
        .catch (error => {
          Alert.alert("Error " + JSON.stringify(error));
        })
    }
    
    createTable = () => {
        sqlite.executeSql('CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))')
              .then (result => {
                  Alert.alert("SUCCESS " + JSON.stringify(result));
              })
              .catch (error => {
                Alert.alert("Error " + JSON.stringify(error));
              })
    }

  

    insertData = () => {
        sqlite.executeSql('INSERT INTO Users (name) VALUES (:name)', ['User ' + Math.ceil(Math.random() * 1000)])
              .then (result => {
                  Alert.alert("SUCCESS " + JSON.stringify(result));
              })
              .catch (error => {
                Alert.alert("Error " + JSON.stringify(error));
              })
    }

    selectData = () => {
        sqlite.executeSql('SELECT * FROM `users`', [])
              .then (result => {
                  Alert.alert("SUCCESS " + JSON.stringify(result.rows.item(0)));
                //   for (let i = 0; i < result.rows.length; ++i) {
                //     console.log('item:', result.rows.item(i));
                //     alert(JSON.stringify(result.rows.item(i)));
                //   }
              })
              .catch (error => {
                Alert.alert("Error " + JSON.stringify(error));
              })
    }

    render() {
        return (
            <View>
                 
                <Button onPress={()=> this.open()} 
                        title="Open DB">
                </Button>

                <Button onPress={()=> this.dropTable()} 
                        title="Drop Table">
                </Button>

                <Button onPress={()=> this.createTable()} 
                        title="Create Table">
                </Button>


                <Button onPress={()=> this.insertData()} 
                        title="Insert Data">
                </Button>


                <Button onPress={()=> this.selectData()} 
                        title="Select Data">
                </Button>
            </View>
        )
    }
}