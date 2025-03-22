"use client";
import React, { Component, useState, useRef } from 'react';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, isPaused: false };
        console.log("Constructor: komponen di inisiasi/dibuat");
        this.intervalId = null; // Store interval ID
    }

    componentDidMount() {
        console.log('ComponentDidMount: komponen berhasil di mounting');
        this.startCounting();
    }

    startCounting = () => {
        if (!this.state.isPaused) {
            this.intervalId = setInterval(() => {
                this.setState(prevState => ({ count: prevState.count + 1 }));
            }, 1000);
        }
    };


    stopCounting = () => {
        clearInterval(this.intervalId);
        this.intervalId = null; // Clear the interval ID
    };


    pauseResumeCounting = () => {
        if (this.state.isPaused) {
            this.setState({ isPaused: false }, this.startCounting); // Resume
        } else {
            this.stopCounting(); // Pause
            this.setState({ isPaused: true });
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log("apakah komponen diupdate?", nextState.count);
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`component did update from ${prevState.count} to ${this.state.count}`);
    }

    componentWillUnmount() {
        console.log("component will be removed");
        // Do NOT clear the count here.
        clearInterval(this.intervalId); // Still clear the interval.
    }

    render() {
        console.log("Render: Komponen di render");
        return (
            <div className='p-4 bg-gray-400 rounded'>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.stopCounting} className='bg-blue-700 shadow-lg text-white rounded p-4'>Stop</button>
                <button onClick={this.pauseResumeCounting} className='bg-green-400 shadow-lg text-white rounded p-4'>{this.state.isPaused ? 'Resume' : 'Pause'}</button>
            </div>
        );
    }
}

export default function User() {
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Ini halaman User</h1>
            <button onClick={() => setShow(!show)} className='bg-red-400 shadow-lg text-white p-2 rounded'>toggle component</button>
            {show && <LifeCycleExample />}
        </>
    );
}