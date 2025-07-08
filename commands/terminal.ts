type PropsConsole = {
  name: string;
  value: string;
};

export default function Console({ name, value }: PropsConsole) {
  const time = new Date().toLocaleTimeString("es-MX");
  console.log(`\n[${time}] ${name}: ${value}`);
}
