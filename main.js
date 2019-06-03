function safeCall(func) {
  try {
    func();
    console.log(true);
  }
  catch (err){
    console.log(false);
  }
}

safeCall(() => console.log('Hello!'));
safeCall(() => JSON.parse('abc'));
safeCall(() => false);
safeCall(() => abc);
