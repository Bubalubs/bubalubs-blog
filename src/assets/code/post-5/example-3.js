export default `\
sudo find . -maxdepth 1 -type d | grep -v '^.$'  | xargs -n 1 -i{} sudo find {} -xdev -type f | cut -d "/" -f 2 | uniq -c | sort -n
`;
