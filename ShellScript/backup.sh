#引数は絶対ファイルパス

echo $#

if [ $# -ne 1 ]; then
 echo An error occurred. Absolute path required.
 exit 1
fi

first=$1
first=${first:0:1}

if [ "$first" != "/" ]; then
       	echo "絶対パスで頼む"
        exit 1	
fi

filename=$1
basename $filename
echo $filename

mkdir filename /Users/s01717/Desktop/BackUP

#cp $1  /Users/s01717/Desktop/BackUP

