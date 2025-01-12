import React, { useEffect, useState } from 'react';

interface Bear {
  name: string;
  binomial: string;
  image: string;
  range: string;
}

const MoreBears: React.FC = () => {
  const [bears, setBears] = useState<Bear[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = 'https://en.wikipedia.org/w/api.php';
  const title = 'List_of_ursids';
  const params = {
    action: 'parse',
    page: title,
    prop: 'wikitext',
    section: '3',
    format: 'json',
    origin: '*',
  };

  const fetchImageUrl = async (fileName: string): Promise<string> => {
    const imageParams = {
      action: 'query',
      titles: `File:${fileName}`,
      prop: 'imageinfo',
      iiprop: 'url',
      format: 'json',
      origin: '*',
    };
    const url = `${baseUrl}?${new URLSearchParams(imageParams).toString()}`;
    try {
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(`Network response was not ok: ${res.status}`);
      const data: {
        query: { pages: Record<string, { imageinfo?: [{ url: string }] }> };
      } = await res.json();
      const pages = data.query.pages;
      const imageInfo = Object.values(pages)[0].imageinfo;
      if (
        imageInfo === null ||
        imageInfo === undefined || // @ts-expect-error: Image info can sometimes be null or undefined due to inconsistent API responses.
        imageInfo.length === 0
      ) {
        throw new Error('Image URL not found');
      }
      return imageInfo[0].url;
    } catch (error) {
      console.error('Error fetching image URL:', error);
      return 'media/placeholder.jpg';
    }
  };

  const extractBears = async (wikitext: string): Promise<Bear[]> => {
    const speciesTables = wikitext.split('{{Species table/end}}');
    const bears: Bear[] = [];

    for (const table of speciesTables) {
      const rows = table.split('{{Species table/row');
      for (const row of rows) {
        const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
        const binomialMatch = row.match(/\|binomial=(.*?)\n/);
        const imageMatch = row.match(/\|image=(.*?)\n/);
        const rangeMatch = row.match(/\|range=(.*?)(\||\n)/);

        if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
          const fileName = imageMatch[1].trim().replace('File:', '');
          const imageUrl = await fetchImageUrl(fileName);

          bears.push({
            name: nameMatch[1],
            binomial: binomialMatch[1],
            image: imageUrl,
            range: rangeMatch[1].trim(),
          });
        }
      }
    }
    return bears;
  };

  useEffect(() => {
    const fetchBearData = async () => {
      try {
        const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`Network response was not ok: ${res.status}`);
        const data = await res.json();
        const wikitext = data.parse.wikitext['*'];
        const bearsData = await extractBears(wikitext);
        setBears(bearsData);
      } catch (error) {
        console.error('Error fetching bear data:', error);
        setError('Failed to fetch bear data.');
      } finally {
        setLoading(false);
      }
    };

    fetchBearData();
  }, []);

  if (loading) return <p>Loading bear data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h3>More Bears</h3>
      {bears.map((bear, index) => (
        <div key={index}>
          <h3>
            {bear.name} ({bear.binomial})
          </h3>
          <img src={bear.image} alt={bear.name} width="200" />
          <p className="content">
            <strong>Range:</strong> {bear.range}
          </p>
        </div>
      ))}
    </section>
  );
};

export default MoreBears;