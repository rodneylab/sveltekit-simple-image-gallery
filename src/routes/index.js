export async function GET() {
  try {
    const images = import.meta.glob('../lib/generated/*.js');
    const imageDataPromises = Object.keys(images).map((path) => images[path]());
    const imageData = await Promise.all(imageDataPromises);
    const imageDataArray = imageData.map((element) => element.default);

    return {
      body: { data: imageDataArray },
    };
  } catch (error) {
    console.error('Error: ', error);
    return {
      status: 500,
      error: `Error in index.js data retrieval: ${error}`,
    };
  }
}
