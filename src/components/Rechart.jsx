import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}L${x + width / 2},${y}L${x + width},${y + height}Z`;
    };

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Rechart = ({ readList }) => {
    const booksData = readList.map(book => ({
        name: book.bookName,
        totalPages: book.totalPages
    }));

    return (
       <div className=''>
         <BarChart
            width={700}
            height={600}
            data={booksData}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
       </div>
    );
};

export default Rechart;
