"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useSoundEffects() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const synthRef = useRef<any>(null);

  useEffect(() => {
    // Check localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ca_sound_enabled");
      if (saved !== null) {
        setSoundEnabled(saved === "true");
      }
    }
  }, []);

  const initSynth = useCallback(async () => {
    if (typeof window === "undefined" || !soundEnabled) return null;
    try {
      const Tone = await import("tone");
      if (Tone.context.state !== "running") {
        await Tone.start();
      }
      if (!synthRef.current) {
        synthRef.current = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: "triangle" },
          envelope: { attack: 0.005, decay: 0.1, sustain: 0.05, release: 0.1 },
        }).toDestination();
        synthRef.current.volume.value = -8;
      }
      return synthRef.current;
    } catch {
      return null;
    }
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("ca_sound_enabled", String(next));
      }
      return next;
    });
  }, []);

  const playPop = useCallback(async () => {
    if (!soundEnabled) return;
    try {
      const synth = await initSynth();
      if (synth) {
        synth.triggerAttackRelease("C5", "32n");
      }
    } catch {}
  }, [soundEnabled, initSynth]);

  const playChime = useCallback(async () => {
    if (!soundEnabled) return;
    try {
      const synth = await initSynth();
      if (synth) {
        const now = (await import("tone")).now();
        synth.triggerAttackRelease("E5", "16n", now);
        synth.triggerAttackRelease("B5", "16n", now + 0.08);
      }
    } catch {}
  }, [soundEnabled, initSynth]);

  const playPin = useCallback(async () => {
    if (!soundEnabled) return;
    try {
      const synth = await initSynth();
      if (synth) {
        synth.triggerAttackRelease("G5", "32n");
      }
    } catch {}
  }, [soundEnabled, initSynth]);

  const playFlip = useCallback(async () => {
    if (!soundEnabled) return;
    try {
      const synth = await initSynth();
      if (synth) {
        synth.triggerAttackRelease("D5", "32n");
      }
    } catch {}
  }, [soundEnabled, initSynth]);

  const playCorrect = useCallback(async () => {
    if (!soundEnabled) return;
    try {
      const Tone = await import("tone");
      const synth = await initSynth();
      if (synth) {
        const now = Tone.now();
        synth.triggerAttackRelease("C5", "16n", now);
        synth.triggerAttackRelease("E5", "16n", now + 0.07);
        synth.triggerAttackRelease("G5", "16n", now + 0.14);
        synth.triggerAttackRelease("C6", "8n", now + 0.21);
      }
    } catch {}
  }, [soundEnabled, initSynth]);

  const playWrong = useCallback(async () => {
    if (!soundEnabled) return;
    try {
      const Tone = await import("tone");
      const synth = await initSynth();
      if (synth) {
        const now = Tone.now();
        synth.triggerAttackRelease("Eb4", "16n", now);
        synth.triggerAttackRelease("B3", "8n", now + 0.1);
      }
    } catch {}
  }, [soundEnabled, initSynth]);

  const playFanfare = useCallback(async () => {
    if (!soundEnabled) return;
    try {
      const Tone = await import("tone");
      const synth = await initSynth();
      if (synth) {
        const now = Tone.now();
        synth.triggerAttackRelease("C5", "16n", now);
        synth.triggerAttackRelease("G5", "16n", now + 0.09);
        synth.triggerAttackRelease("C6", "16n", now + 0.18);
        synth.triggerAttackRelease("E6", "8n", now + 0.27);
      }
    } catch {}
  }, [soundEnabled, initSynth]);

  return {
    soundEnabled,
    toggleSound,
    playPop,
    playChime,
    playPin,
    playFlip,
    playCorrect,
    playWrong,
    playFanfare,
  };
}

